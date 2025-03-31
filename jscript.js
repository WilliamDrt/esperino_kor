



function colorToday() {
 
 
  const hourArr = ["17:00 - 17:40",
                   "17:50 - 18:30",
                   "18:40 - 19:15", 
                   "19:25 - 20:00",
                   "20:10 - 20:45",
                   "20:55 - 21:30"]

const schoolProgram = [
                         [["1","ΜΠΜ","Ν.Ελλ","Ορ 07"],
                          ["2","ΜΠΜ","Ν.Ελλ","Ορ 07"],
                          ["3","ΜΠΜ","Ν.Ελλ","Ορ 07"],
                          ["4","KONT","ΠΣΕΟ-Θ","Ορ 07"],
                          ["5","ΖΟΡ","ΠρΥπ-Θ","Ορ 07"],
                          ["6","ΖΟΡ","ΠρΥπ-Θ","Ορ 07"]]

                                ,

                         [["1","KONT","ΔΥ-Θ","Ορ 07"],
                          ["2","ΖΟΡ","ΠρΥπ-Ε","C 2B"],
                          ["3","ΖΟΡ","ΠρΥπ-Ε","C 2B"],
                          ["4","ΖΟΡ","ΣΑΔΕ-Ε","Ερδ. Δομ"],
                          ["5","ΖΟΡ","ΣΑΔΕ-Ε","Ερδ. Δομ"],
                          ["6","ΖΟΡ","ΣΑΔΕ-Ε","Ερδ. Δομ"]]

                          ,

                         [["1","KONT","ΣΔΒΔ-Ε","C 2B"],
                          ["2","KONT","ΣΔΒΔ-Ε","C 2B"],
                          ["3","KONT","ΣΔΒΔ-Ε","C 2B"],
                          ["4","KONT","ΕΗ/Υ","C 2B"],
                          ["5","ΑΡΓ","Αγγ","Ισ 18"],
                          ["6","ΚΡΙΕ","Φυσ","Ορ 11"]]

                          ,

                         [["1","ΖΟΡ","ΠρΥπ-Θ","Ορ 07"],
                          ["2","KONT","ΔΥ-Θ","Ορ 07"],
                          ["3","ΧΙΝΤ","Γεωμ","Ισ 18"],
                          ["4","ΧΙΝΤ","Αλγ","Ισ 18"],
                          ["5","ΚΡΙΕ","Φυσ","Ορ 12"],
                          ["6","ΧΙΝΤ","Αλγ","Ορ 07"]]
                          
                          ,

                         [["1","KONT","ΔΥ-Ε","C 2B"],
                          ["2","KONT","ΔΥ-Ε","C 2B"],
                          ["3","KONT","ΔΥ-Θ","Ορ 07"],
                          ["4","ΓΚΡΘ","ΕΘΠΥ-Ε","C 3Q"],
                          ["5","ΓΚΡΘ","ΕΘΠΥ-Ε","C 3Q"],
                          ["6","ΓΚΡΘ","ΕΘΠΥ-Ε","C 3Q"]]
                      ]
                              
                      
                      
 var my_table = document.getElementById("t_day0");
for (let nDay = 0; nDay <= 4; nDay++){
 my_table = document.getElementById("t_day" + nDay);
//console.log("t_day" + nDay)

// creating all cells
for (let iRow = 0; iRow <= 5; iRow++) {
  // creates a table row
  const row = document.createElement("tr");
  for (let jCell = 0; jCell <= 3; jCell++) {
    // Create a <td> element and a text node, make the text
    // node the contents of the <td>, and put the <td> at
    // the end of the table row
    const cell = document.createElement("td");    
    let txt = "N/A"   
      if (jCell == 0) {txt = hourArr[iRow]; }
                              //Day--Row--Cell
      else {txt = schoolProgram[nDay][iRow][jCell]; }                                                
      const cellText = document.createTextNode(txt);   
    cell.appendChild(cellText);
    row.appendChild(cell);
  }
  // add the row to the end of the table body 
  my_table.appendChild(row); 
}



}

 const d = new Date();
  let day = d.getDay();
  let dd = "";  
  // alert(day);
  switch(day){
    case 1:
      dd = "day0";
      break;
    case 2:
      dd = "day1";
      break;
    case 3:
      dd = "day2";
      break;
    case 4:
      dd = "day3";
    break;
    case 5:
      dd = "day4";
     break;
  }
  document.getElementById(dd).style["color"] = "blue";
  document.getElementById(dd).scrollIntoView({ behavior: "smooth", block: "start", inline: "nearest" });
  
}
