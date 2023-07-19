document.querySelector("form").addEventListener("submit", function(event) {
    event.preventDefault(); // Prevent form submission
  
    var genderRadios = document.getElementsByName("gender");
    var gender = "";
    for (var i = 0; i < genderRadios.length; i++) {
      if (genderRadios[i].checked) {
        gender = genderRadios[i].value;
        break;
      }
    }
  
    var weight = parseFloat(document.getElementById("weight").value);
    var height = parseFloat(document.getElementById("height").value);
    var age = parseInt(document.getElementById("age").value);
  
    var bmi = calculateBMI(weight, height);
    var category = getBMICategory(bmi, gender, age);
    var desk = getBMIDesk(bmi, gender, age);
  
    var result = "BMI Anda: " + bmi.toFixed(2) + "<br> Anda dalam kategori " + category + "<br>" + desk;
    if (gender === "male") {
      result += " (Laki-laki)";
    } else if (gender === "female") {
      result += " (Perempuan)";
    }
  
    document.getElementById("output").innerHTML = result;
  });
  
  function calculateBMI(weight, height) {
    // Konversi tinggi dari cm ke meter
    var heightInMeter = height / 100;
  
    // Hitung BMI
    var bmi = weight / (heightInMeter * heightInMeter);
    return bmi;
  }
  
  function getBMICategory(bmi, gender, age) {
    if (gender === "male") {
      if (age < 18) {
        if (bmi < 18.5) {
          return "Kekurangan berat badan";
        } else if (bmi >= 18.5 && bmi < 24.9) {
          return "Normal";
        } else if (bmi >= 25.0 && bmi < 29.9){
          return "Kelebihan berat badan";
        } else {
          return "Kegemukan"
        }
      } else {
        if (bmi < 18.5) {
          return "Kekurangan berat badan";
        } else if (bmi >= 18.5 && bmi < 24.9) {
          return "Normal";
        } else if (bmi >= 25.0 && bmi < 29.9){
          return "Kelebihan berat badan";
        } else {
        return "Kegemukan"
        }
      }
    } else {
      if (age < 18) {
        if (bmi < 18.5) {
          return "Kekurangan berat badan";
        } else if (bmi >= 18.5 && bmi < 24.9) {
          return "Normal";
        } else if (bmi >= 25.0 && bmi < 29.9){
          return "Kelebihan berat badan";
        } else {
          return "Kegemukan"
        }
      } else {
        if (bmi < 18.5) {
          return "Kekurangan berat badan";
        } else if (bmi >= 18.5 && bmi < 24.9) {
          return "Normal";
        } else if (bmi >= 25.0 && bmi < 29.9){
          return "Kelebihan berat badan";
        } else {
          return "Kegemukan"
        }
      }
    }
  }
  
  function getBMIDesk(bmi, gender, age) {
    if (gender === "male") {
        if (age < 18) {
          if (bmi < 18.5) {
            return "Jika BMI dikatergori ini maka anda disarankan untuk menaikan berat badan anda hingga batas normal";
          } else if (bmi >= 18.5 && bmi < 24.9) {
            return "Jika BMI dikatergori ini maka anda memiliki berat badan ideal";
          } else if (bmi >= 25.0 && bmi < 29.9){
            return "Jika BMI dikatergori ini maka anda disarankan untuk menurunkan berat badan anda hingga batas normal";
          } else {
            return "Jika BMI dikatergori ini maka anda sangat disarankan untuk menurunkan berat badan anda hingga batas normal"
          }
        } else {
          if (bmi < 18.5) {
            return "Jika BMI dikatergori ini maka anda disarankan untuk menaikan berat badan anda hingga batas normal";
          } else if (bmi >= 18.5 && bmi < 24.9) {
            return "Jika BMI dikatergori ini maka anda memiliki berat badan ideal";
          } else if (bmi >= 25.0 && bmi < 29.9){
            return "Jika BMI dikatergori ini maka anda disarankan untuk menurunkan berat badan anda hingga batas normal";
          } else {
            return "Jika BMI dikatergori ini maka anda sangat disarankan untuk menurunkan berat badan anda hingga batas normal"
          }
        }
      } else {
        if (age < 18) {
          if (bmi < 18.5) {
            return "Jika BMI dikatergori ini maka anda disarankan untuk menaikan berat badan anda hingga batas normal";
          } else if (bmi >= 18.5 && bmi < 24.9) {
            return "Jika BMI dikatergori ini maka anda memiliki berat badan ideal";
          } else if (bmi >= 25.0 && bmi < 29.9){
            return "Jika BMI dikatergori ini maka anda disarankan untuk menurunkan berat badan anda hingga batas normal";
          } else {
            return "Jika BMI dikatergori ini maka anda sangat disarankan untuk menurunkan berat badan anda hingga batas normal"
          }
        } else {
          if (bmi < 18.5) {
            return "Jika BMI dikatergori ini maka anda disarankan untuk menaikan berat badan anda hingga batas normal";
          } else if (bmi >= 18.5 && bmi < 24.9) {
            return "Jika BMI dikatergori ini maka anda memiliki berat badan ideal";
          } else if (bmi >= 25.0 && bmi < 29.9){
            return "Jika BMI dikatergori ini maka anda disarankan untuk menurunkan berat badan anda hingga batas normal";
          } else {
            return "Jika BMI dikatergori ini maka anda sangat disarankan untuk menurunkan berat badan anda hingga batas normal"
          }
        }
      }
  }

  document.querySelector("form").addEventListener("reset", function(event) {
  event.preventDefault(); // Prevent form reset

  document.getElementById("output").innerHTML = ""; // Menghapus output BMI

  // Mengatur ulang nilai-nilai input
  document.getElementById("weight").value = "";
  document.getElementById("height").value = "";
  document.getElementById("age").value = "";

  // Mengatur ulang pilihan jenis kelamin
  var genderRadios = document.getElementsByName("gender");
  for (var i = 0; i < genderRadios.length; i++) {
    genderRadios[i].checked = false;
  }
});