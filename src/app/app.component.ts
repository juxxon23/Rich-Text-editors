import { Component } from '@angular/core';
import { EditorChangeContent, EditorChangeSelection } from 'ngx-quill';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'quilltest';

  editorModules = {
    toolbar: [
      ['bold', 'italic', 'underline'],        // toggled buttons
   
      [{ 'list': 'ordered'}, { 'list': 'bullet' }],     // list
   
      [{ 'header': [1, 2, 3, 4, 5, 6, false] }],
              
      [{ 'font': [] }],                                 // Dropdown font/align
      [{ 'align': [] }],

      ['image']                                         // image
    ]
  };

  editorText: any = '';
  
  changedEditor(event: EditorChangeContent | EditorChangeSelection) {
    console.log(event);
  }
}
