import { Component } from '@angular/core';
import { FileUploader } from 'ng2-file-upload';

@Component({
  selector: 'app-test',
  templateUrl: './test.component.html',
  styleUrls: ['./test.component.css'],
})
export class TestComponent {
  uploader: FileUploader | undefined;
  hasBaseDropZoneOver = false;

  fileOverBase(e: any) {
    this.hasBaseDropZoneOver = e;
  }
}
