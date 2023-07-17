export function load_spreadsheet(data) {
    jspreadsheet.setLicense('MWM2NTI2MGM1ZmZjMDEwMzVjNDc4OWQ3ZTc2NDJmM2M5ODFkMDY1N2E0YmE1NWJlYWJmNGI4YmY4M2U1M2FlMzEwN2NiODI5OWM2YmE2MTIzNzA3ZjNjNzBhMTJiNDVmMTRlMWQ2YTRmMjNmMzU4NmMwZTBjYTdlNzMwZmE5MjYsZXlKdVlXMWxJam9pVm1scllYTWdUbWx6WTJoaGJDSXNJbVJoZEdVaU9qRTJPVEU1TmpjMk1EQXNJbVJ2YldGcGJpSTZXeUozWldJaUxDSnNiMk5oYkdodmMzUWlYU3dpY0d4aGJpSTZNQ3dpYzJOdmNHVWlPbHNpZGpjaUxDSjJPQ0lzSW5ZNUlpd2lkakV3SWwxOQ==');
    //const firstSheet = JSON.parse(data);
    jspreadsheet(document.getElementById('spreadsheet'), {

        toolbar: true,
        worksheets: [
            data
        ],
        tabs:true
    });
    return "";
}

export function load_secondSpreadsheet(data) {
    jspreadsheet.setLicense('MWM2NTI2MGM1ZmZjMDEwMzVjNDc4OWQ3ZTc2NDJmM2M5ODFkMDY1N2E0YmE1NWJlYWJmNGI4YmY4M2U1M2FlMzEwN2NiODI5OWM2YmE2MTIzNzA3ZjNjNzBhMTJiNDVmMTRlMWQ2YTRmMjNmMzU4NmMwZTBjYTdlNzMwZmE5MjYsZXlKdVlXMWxJam9pVm1scllYTWdUbWx6WTJoaGJDSXNJbVJoZEdVaU9qRTJPVEU1TmpjMk1EQXNJbVJ2YldGcGJpSTZXeUozWldJaUxDSnNiMk5oYkdodmMzUWlYU3dpY0d4aGJpSTZNQ3dpYzJOdmNHVWlPbHNpZGpjaUxDSjJPQ0lzSW5ZNUlpd2lkakV3SWwxOQ==');
   // const comparedData = JSON.parse(data);
    jspreadsheet(document.getElementById('secondSpreadsheet'), {
        toolbar: true,
        worksheets: [
            data
        ],
        tabs: true
    });
    return "";
}


