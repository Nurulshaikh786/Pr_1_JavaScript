    let employee_id= 8133;
    let employee_name = "Nurul";

    let employee_addres = "Navsari";
    let employee_designation = "Fresher";

    const salary = 10000;
    const hra = salary * 0.4;
    const da = salary *0.2;

    const gross_salary = salary + hra + da;

    const pf = salary * 0.12;
    const tda = 200;

    const salaryDeduction = pf + tda;

    const totalSalary = gross_salary - salaryDeduction;

       console.log(`Employee ID: ${employee_id}`);
       console.log(`Employee Name: ${employee_name}`);
       console.log(`Employee Addres: ${employee_addres}`);
       console.log(`Employee Desgination : ${employee_designation}`);
       console.log(`Basic Salary: ${salary}`);
       console.log(`HRA: ${hra}`);
       console.log(`DA: ${da}`);
       console.log(`PF : ${pf}`);
       console.log(`TDA : ${tda}`);
       console.log(`Gross Salary : ${gross_salary}`);
       console.log(`Deducted Salary : ${salaryDeduction}`);
       console.log(`Total Salary : ${totalSalary}`);
