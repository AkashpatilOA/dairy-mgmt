import { Component } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { MilkReportService } from 'src/app/services/milk-report.service';

@Component({
  selector: 'app-report',
  templateUrl: './report.component.html',
  styleUrls: ['./report.component.scss']
})
export class ReportComponent {
milkReportForm: FormGroup;
constructor(private fb:FormBuilder, private milkReportService:MilkReportService){
  this.milkReportForm = this.fb.group({
    date: ['', Validators.required],
    quantity: ['', Validators.required],
    type: ['', Validators.required],
    fat: ['', Validators.required],
    carb: ['', Validators.required],
    vitaminA: ['', Validators.required],
    fatRate: ['', Validators.required],
    snfRate: ['', Validators.required],
    snfAmt: ['', Validators.required],
    carbohydrates: ['', Validators.required],
    zinc: ['', Validators.required],
    vitaminB: ['', Validators.required],
    vitaminC: ['', Validators.required],
    vitaminD: ['', Validators.required],
    vitaminB12: ['', Validators.required],
  });
}
onSubmit() {
if(this.milkReportForm.valid){
  const formData= this.milkReportForm.value;
  this.milkReportService.saveMilkReport(formData).subscribe(
(response)=>{
  console.log("Data Added successfully", response);  
},
(error) => {
  console.error('Error saving milk report:', error);
}
  );
}
}
}
