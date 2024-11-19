import { Component, Input } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { MessageService } from 'primeng/api';
import { FileUploadModule } from 'primeng/fileupload';


interface UploadEvent {
  // originalEvent: Event;
  // files: File[];
  files:any[];
}

@Component({
  selector: 'app-book-img-upload',
  templateUrl: './book-img-upload.component.html',
  styleUrl: './book-img-upload.component.css'
})
export class BookImgUploadComponent {
@Input() addBookForm !: FormGroup;

  uploadedFiles: any[] = [];

    constructor(private messageService: MessageService) {}

    onUpload(event:UploadEvent) {
      console.log('onUpload',event)
        for(let file of event.files) {
            this.uploadedFiles.push(file);
        }
        console.log('uploadedFiles',this.uploadedFiles)
        this.addBookForm.controls['images'].setValue(this.uploadedFiles);
        // this.addBookForm.patchValue({
        //   images : Array.from(this.uploadedFiles)
        // })
        this.addBookForm.updateValueAndValidity();

        console.log('addBookForm',this.addBookForm);
    }

    submit(){
      console.log(this.addBookForm)
    }

  }