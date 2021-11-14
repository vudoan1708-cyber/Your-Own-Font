import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';

@Component({
  selector: 'app-font-style-scan',
  templateUrl: './font-style-scan.component.html',
  styleUrls: ['./font-style-scan.component.scss']
})
export class FontStyleScanComponent implements OnInit {
  // DOM Ref
  @ViewChild('imgPreview') imgPreview: any = null;

  // Title of The Upload Area
  uploadTitle: string = 'Drag Your Image File Here';
  // Uploading Imgs
  imgUploading: boolean = false;
  // Uploading Progress
  uploadProgress: number = 0;
  // Error Msg
  errorMsg: string = '';
  // Class Binding
  isEnabled: boolean = false;

  constructor() { }

  ngOnInit(): void {
    console.log('VIEW IS INITIALISED');
  }

  errorHandling() {
    this.errorMsg = 'Only Image File Formats Such As PNG, JPEG, SVG, WEBP,... Are Allowed';
  }

  previewFile(file: any) {
    // Create A Blob Object of File List
    const reader: FileReader = new FileReader();
    // Read The Image File Into Raw Data (base64)
    reader.readAsDataURL(file);

    reader.onloadstart = (data) => {
      this.uploadProgress = Math.floor((data.loaded * 100) / data.total);
      this.imgUploading = true;
    };

    reader.onprogress = (data) => {
      this.uploadProgress = Math.floor((data.loaded * 100) / data.total);
    }

    reader.onloadend = (data) => {
      const base64data = reader.result;
      // preview the most recent photo capture
      this.imgPreview.nativeElement.src = base64data;
      this.uploadProgress = Math.floor((data.loaded * 100) / data.total);
      this.imgUploading = false;
      // Upload The Title
      this.uploadTitle = (file.name).split('.')[0];
    }
  }

  uploadFile(file: any) {
    this.previewFile(file);
  }

  handleFiles(e: any): void {
    const { files }: any = (<HTMLInputElement>e.target).files
      ? <HTMLInputElement>e.target
      :  e.dataTransfer;

    // Loop Through The FileList Object And Execute The Next Function
    [...files].forEach((file) => {
      // eslint-disable-next-line no-unused-expressions
      (file.type === 'image/jpeg' || file.type === 'image/png' || file.type === 'image/svg+xml' || file.type === 'image/webp')
        ? this.uploadFile(file)
        : this.errorHandling();
    });
  }

  // Event Handlers
  dropFile(e: DragEvent): void {
    e.preventDefault();
    // Get The Data File Transfer
    this.handleFiles(e);
  };

  onDragEnter(e: DragEvent): void {
    e.preventDefault();
  };

  onDragOver(e: DragEvent): void {
    e.preventDefault();
  };

  deleteImg(e: any): void {
    // Reset the progress
    this.uploadProgress = 0;
    // Reset the title
    this.uploadTitle = 'Drag Your Image File Here';
  };
}
