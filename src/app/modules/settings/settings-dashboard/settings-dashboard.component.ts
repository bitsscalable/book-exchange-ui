import { Component, OnInit } from '@angular/core';
import { genre } from '../../../shared/variables/genres';
import { SettingsService } from '../settings.service';
import { MessageService } from 'primeng/api';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-settings-dashboard',
  templateUrl: './settings-dashboard.component.html',
  styleUrl: './settings-dashboard.component.css'
})
export class SettingsDashboardComponent implements OnInit{
  
  
  languages = [
    { name: 'Telugu', code: 'NY' },
    { name: 'Hindi', code: 'RM' },
    { name: 'English', code: 'LDN' },
    { name: 'Marati', code: 'IST' },
    { name: 'Tamil', code: 'PRS' }
];


value!:String;
settingsForm!: FormGroup;

constructor(private _service: SettingsService, private _alert: MessageService,private fb: FormBuilder){

}

updatePreferences(){
  let languages = this.settingsForm.controls['selectedLanguages'].value.map((element: any) => element.code);
  let genres = this.settingsForm.controls['selectedGenres'].value.map((element: any) => element.code);
 

  this._service.saveSettings(genres,languages).subscribe(res=>{
    this._alert.add({severity: 'success', summary: 'Saved', detail: 'Preferences saved successfully' });
  })
}


ngOnInit(): void {
  this.settingsForm = this.fb.group({
    selectedLanguages: [,Validators.required],
    selectedGenres : [,Validators.required]
  });
  this.getSettings();
}

getSettings(){
  this._service.getSettings().subscribe(res=>{
    console.log(res);
  },err=>{
    this._alert.add({severity: 'warn', summary: 'No Preferences', detail: 'Please add your preferences' });
  });
}

}
