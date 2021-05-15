// VARAIBLE DECLARATION
let tbody = d3.select("tbody")
// FROM DATA.JS
var tableData = data;

// Function Build Table
function buildTable(data){
    // Start By Clearing Existing Data
    tbody.html("");
    // Loop Through `data` 
    data.forEach((dataRow) => {
        // Append Table Row `tr` to the Table Body `tbody`
        let row = tbody.append("tr");
        // `Object.values` & `forEach` to Iterate Through Values
        Object.values(dataRow).forEach((val) => {
            // Append a Cell to the Row for Each Value
            let cell = row.append("td");
            cell.text(val);
        });
    })
}

// CLICK FUNCTION VIA BUTTON
function handleClick() {
    // PREVENTS THE PAGE FROM REFRESHING
    d3.event.preventDefault();
    // SELECT HTML INPUT ELEMENT AND GET THE VALUE OF THAT INPUT ELEMENT
    let date = d3.select("#datetime").property("value");
    let filterData = tableData;

    // CHECK IF A DATE WAS ENTERED & FILTER DATA USING THAT DATE
    if (date) {
        // APPLY FILTER TO THE TABLE DATA TO ONLY KEEP ROWS WHERE DATETIME VALYE MATCHES THE FILTER VALUE
        filterData = filterData.filter((row) => row.datetime === date);
    }
    // BUILD TABLE WITH FILTERED DATA
    buildTable(filterData);
}
// 'ON' FUNCTION TO ATTACH AN EVENT TO THE HANDLER FUNCTION
d3.selectAll("#filter-btn").on("click", handleClick);
// BUILD TABLE WITH DATA.JS
buildTable(tableData);