import { saveAs } from 'file-saver';
import { PDFDocument } from 'pdf-lib';

// public async onExport() {
//   const url = './template.pdf';
//   const arrayBuffer = await fetch(url).then((res) => res.arrayBuffer());

//   const pdfDoc = await PDFDocument.load(arrayBuffer);

//   const form = pdfDoc.getForm();

//   form.getTextField(FormFields.name).setText('Huertas');
//   form.getTextField(FormFields.fatherName).setText('Huertas');
//   form.getTextField(FormFields.motherName).setText('Huertas');
//   form.getTextField(FormFields.sex).setText('Masculino');
//   form.getTextField(FormFields.age).setText('25');
//   form.getTextField(FormFields.civilState).setText('Casado');
//   form.getTextField(FormFields.placeOfBirth).setText('Mexico');
//   form.getTextField(FormFields.dateOfBirth).setText('1990-01-01');
//   form.getTextField(FormFields.schooling).setText('Universidad');
//   form.getTextField(FormFields.religion).setText('Otro');
//   form.getTextField(FormFields.address).setText('Mexico');
//   form.getTextField(FormFields.phone).setText('999 999 9999');
//   form.getTextField(FormFields.emergencyContactName).setText('John');
//   form
//     .getTextField(FormFields.emergencyContactNumber)
//     .setText('999 999 9999');
//   form.getTextField(FormFields.bloodGroup).setText('A+');

//   // [...Object.values(FormFields)].forEach((field) => {
//   //   form.getTextField('field').colo
//   // })

//   const pdfBytes = await pdfDoc.save();

//   const blob = new Blob([pdfBytes], { type: 'application/pdf' });

//   saveAs(blob, 'result.pdf');
// }
