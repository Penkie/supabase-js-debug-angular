import { Component, OnInit } from '@angular/core';
import { createClient } from '@supabase/supabase-js';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {

  ngOnInit() {
    const supabaseUrl = "https://cqyttyghuetwtynvqfgf.supabase.co";
    const supabaseKey = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJyb2xlIjoiYW5vbiIsImlhdCI6MTYwOTc3MTA0MSwiZXhwIjoxOTI1MzQ3MDQxfQ.hDn6RlaFMXitADJ-NCgB51JKzGWrR0rQ3GPzZv2hVmw";
    const supabase = createClient(supabaseUrl, supabaseKey);
    console.log(supabase);
  }
}
