$(function () {

    // Chart section Initial object

    const chartData = {
        labels: ["Tax", "Household", "Living Cost", "Education", "Medical", "Transportation", "Insurance", "Loan EMI", "Family & Friends", "Entertainment", "Investment"],
        data: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    };

    // Tax section variables & arrays
    var total_tax = 0;
    var select_values = [];
    var tax_data = [];

    // Income section variables
    var income_data = [];
    var select_values_income = [];

    // House hold section variables & arrays
    var total_household = 0;
    var select_values_household = [];
    var household_data = [];


    // Living cost section variables & arrays
    var total_living = 0;
    var select_values_living = [];
    var living_data = [];

    // Education cost section variables & arrays
    var total_education = 0;
    var select_values_education = [];
    var education_data = [];

    // Medical cost section variables & arrays
    var total_medical = 0;
    var select_values_medical = [];
    var medical_data = [];

    // Transport cost section variables & arrays
    var total_transport = 0;
    var select_values_transport = [];
    var transport_data = [];

    // Insurance cost section variables & arrays
    var total_insurance = 0;
    var select_values_insurance = [];
    var insurance_data = [];

    // Insurance cost section variables & arrays
    var total_loan = 0;
    var select_values_loan = [];
    var loan_data = [];

    // Family cost section variables & arrays
    var total_family = 0;
    var select_values_family = [];
    var family_data = [];

    // Entertainment cost section variables & arrays
    var total_entertainment = 0;
    var select_values_entertainment = [];
    var entertainment_data = [];

    // Entertainment cost section variables & arrays
    var total_invest = 0;
    var select_values_invest = [];
    var invest_data = [];

    // Updating summery section
    var total_expdid = 0;





    // button function
    $("#save-button").click(() => {

        // saving Initial values on local storage
        localStorage.setItem("chart_data", JSON.stringify(chartData.data));
        localStorage.setItem("tax_input_data", JSON.stringify(tax_data));

        // Capturing Tax dropdown selected values
        for (var i = 1; i <= 2; i++) {
            select_values.push($(`#tax-select${i}`).find(":selected").val());
        }

        // Capturing Income dropdown selected values
        for (var i = 1; i <= 2; i++) {
            select_values_income.push($(`#income-select${i}`).find(":selected").val());
        }

        // Capturing Household dropdown selected values
        for (var i = 1; i <= 11; i++) {
            select_values_household.push($(`#house-select${i}`).find(":selected").val());
            
        }

        // Capturing living cost dropdown selected values
        for (var i = 1; i <= 8; i++) {
            select_values_living.push($(`#living-select${i}`).find(":selected").val());
        }

        // Capturing education cost dropdown selected values
        for (var i = 1; i <= 4; i++) {
            select_values_education.push($(`#education-select${i}`).find(":selected").val());
        }

        // Capturing medical cost dropdown selected values
        for (var i = 1; i <= 4; i++) {
            select_values_medical.push($(`#medical-select${i}`).find(":selected").val());
        }

        // Capturing transport cost dropdown selected values
        for (var i = 1; i <= 7; i++) {
            select_values_transport.push($(`#transport-select${i}`).find(":selected").val());
        }

        // Capturing insurance cost dropdown selected values
        for (var i = 1; i <= 3; i++) {
            select_values_insurance.push($(`#insurance-select${i}`).find(":selected").val());
        }

        // Capturing loan cost dropdown selected values
        for (var i = 1; i <= 5; i++) {
            select_values_loan.push($(`#loan-select${i}`).find(":selected").val());
        }

        // Capturing family cost dropdown selected values
        for (var i = 1; i <= 5; i++) {
            select_values_family.push($(`#family-select${i}`).find(":selected").val());
        }

        // Capturing entertainment cost dropdown selected values
        for (var i = 1; i <= 5; i++) {
            select_values_entertainment.push($(`#entertainment-select${i}`).find(":selected").val());
        }

        // Capturing investment cost dropdown selected values
        for (var i = 1; i <= 5; i++) {
            select_values_invest.push($(`#invest-select${i}`).find(":selected").val());
        }





        // Calculating Tax Input Values
        for (var i = 0; i < select_values.length; i++) {

            if (select_values[i] == "4") {
                total_tax += parseInt($(`#tax-input${i + 1}`).val()) * 4;
                tax_data.push(parseInt($(`#tax-input${i + 1}`).val()));
            }
            else if (select_values[i] == "3") {
                total_tax += parseInt($(`#tax-input${i + 1}`).val()) / 4;
                tax_data.push(parseInt($(`#tax-input${i + 1}`).val()));
            }
            else if (select_values[i] == "6") {
                total_tax += parseInt($(`#tax-input${i + 1}`).val()) / 6;
                tax_data.push(parseInt($(`#tax-input${i + 1}`).val()));
            }
            else if (select_values[i] == "12") {
                total_tax += parseInt($(`#tax-input${i + 1}`).val()) / 12;
                tax_data.push(parseInt($(`#tax-input${i + 1}`).val()));
            }
            else {
                total_tax += parseInt($(`#tax-input${i + 1}`).val());
                tax_data.push(parseInt($(`#tax-input${i + 1}`).val()));
            }

        }



        // Calculating Income Input Values
        for (var i = 0; i < select_values_income.length; i++) {

            if (select_values_income[i] == "4") {
                
                income_data.push(parseInt($(`#income-input${i + 1}`).val())) * 4;
            }
            else if (select_values_income[i] == "3") {
                
                income_data.push(parseInt($(`#income-input${i + 1}`).val())) / 4;
            }
            else if (select_values_income[i] == "6") {
                
                income_data.push(parseInt($(`#income-input${i + 1}`).val())) / 6;
            }
            else if (select_values_income[i] == "12") {
                
                income_data.push(parseInt($(`#income-input${i + 1}`).val())) / 12;
            }
            else {
                
                income_data.push(parseInt($(`#income-input${i + 1}`).val()));
            }
        }



        // Calculating Household Input Values
        for (var i = 0; i < select_values_household.length; i++) {

            if (select_values_household[i] == "4") {
                total_household += parseInt($(`#house-input${i + 1}`).val()) * 4;
                household_data.push(parseInt($(`#house-input${i + 1}`).val()));
            }
            else if (select_values_household[i] == "3") {
                total_household += parseInt($(`#house-input${i + 1}`).val()) / 4;
                household_data.push(parseInt($(`#house-input${i + 1}`).val()));
            }
            else if (select_values_household[i] == "6") {
                total_household += parseInt($(`#house-input${i + 1}`).val()) / 6;
                household_data.push(parseInt($(`#house-input${i + 1}`).val()));
            }
            else if (select_values_household[i] == "12") {
                total_household += parseInt($(`#house-input${i + 1}`).val()) / 12;
                household_data.push(parseInt($(`#house-input${i + 1}`).val()));
            }
            else {
                total_household += parseInt($(`#house-input${i + 1}`).val());
                household_data.push(parseInt($(`#house-input${i + 1}`).val()));
            }
        }



        // Calculating Living Cost Input Values
        for (var i = 0; i < select_values_living.length; i++) {

            if (select_values_living[i] == "4") {
                total_living += parseInt($(`#living-input${i + 1}`).val()) * 4;
                living_data.push(parseInt($(`#living-input${i + 1}`).val()));
            }
            else if (select_values_living[i] == "3") {
                total_living += parseInt($(`#living-input${i + 1}`).val()) / 4;
                living_data.push(parseInt($(`#living-input${i + 1}`).val()));
            }
            else if (select_values_living[i] == "6") {
                total_living += parseInt($(`#living-input${i + 1}`).val()) / 6;
                living_data.push(parseInt($(`#living-input${i + 1}`).val()));
            }
            else if (select_values_living[i] == "12") {
                total_living += parseInt($(`#living-input${i + 1}`).val()) / 12;
                living_data.push(parseInt($(`#living-input${i + 1}`).val()));
            }
            else {
                total_living += parseInt($(`#living-input${i + 1}`).val());
                living_data.push(parseInt($(`#living-input${i + 1}`).val()));
            }
        }



        // Calculating education Cost Input Values
        for (var i = 0; i < select_values_education.length; i++) {

            if (select_values_education[i] == "4") {
                total_education += parseInt($(`#education-input${i + 1}`).val()) * 4;
                education_data.push(parseInt($(`#education-input${i + 1}`).val()));
            }
            else if (select_values_education[i] == "3") {
                total_education += parseInt($(`#education-input${i + 1}`).val()) / 4;
                education_data.push(parseInt($(`#education-input${i + 1}`).val()));
            }
            else if (select_values_education[i] == "6") {
                total_education += parseInt($(`#education-input${i + 1}`).val()) / 6;
                education_data.push(parseInt($(`#education-input${i + 1}`).val()));
            }
            else if (select_values_education[i] == "12") {
                total_education += parseInt($(`#education-input${i + 1}`).val()) / 12;
                education_data.push(parseInt($(`#education-input${i + 1}`).val()));
            }
            else {
                total_education += parseInt($(`#education-input${i + 1}`).val());
                education_data.push(parseInt($(`#education-input${i + 1}`).val()));
            }
        }


        // Calculating medical Cost Input Values
        for (var i = 0; i < select_values_medical.length; i++) {

            if (select_values_medical[i] == "4") {
                total_medical += parseInt($(`#medical-input${i + 1}`).val()) * 4;
                medical_data.push(parseInt($(`#medical-input${i + 1}`).val()));
            }
            else if (select_values_medical[i] == "3") {
                total_medical += parseInt($(`#medical-input${i + 1}`).val()) / 4;
                medical_data.push(parseInt($(`#medical-input${i + 1}`).val()));
            }
            else if (select_values_medical[i] == "6") {
                total_medical += parseInt($(`#medical-input${i + 1}`).val()) / 6;
                medical_data.push(parseInt($(`#medical-input${i + 1}`).val()));
            }
            else if (select_values_medical[i] == "12") {
                total_medical += parseInt($(`#medical-input${i + 1}`).val()) / 12;
                medical_data.push(parseInt($(`#medical-input${i + 1}`).val()));
            }
            else {
                total_medical += parseInt($(`#medical-input${i + 1}`).val());
                medical_data.push(parseInt($(`#medical-input${i + 1}`).val()));
            }
        }



        // Calculating transport Cost Input Values
        for (var i = 0; i < select_values_transport.length; i++) {

            if (select_values_transport[i] == "4") {
                total_transport += parseInt($(`#transport-input${i + 1}`).val()) * 4;
                transport_data.push(parseInt($(`#transport-input${i + 1}`).val()));
            }
            else if (select_values_transport[i] == "3") {
                total_transport += parseInt($(`#transport-input${i + 1}`).val()) / 4;
                transport_data.push(parseInt($(`#transport-input${i + 1}`).val()));
            }
            else if (select_values_transport[i] == "6") {
                total_transport += parseInt($(`#transport-input${i + 1}`).val()) / 6;
                transport_data.push(parseInt($(`#transport-input${i + 1}`).val()));
            }
            else if (select_values_transport[i] == "12") {
                total_transport += parseInt($(`#transport-input${i + 1}`).val()) / 12;
                transport_data.push(parseInt($(`#transport-input${i + 1}`).val()));
            }
            else {
                total_transport += parseInt($(`#transport-input${i + 1}`).val());
                transport_data.push(parseInt($(`#transport-input${i + 1}`).val()));
            }
        }


        // Calculating insurance Cost Input Values
        for (var i = 0; i < select_values_insurance.length; i++) {

            if (select_values_insurance[i] == "4") {
                total_insurance += parseInt($(`#insurance-input${i + 1}`).val()) * 4;
                insurance_data.push(parseInt($(`#insurance-input${i + 1}`).val()));
            }
            else if (select_values_insurance[i] == "3") {
                total_insurance += parseInt($(`#insurance-input${i + 1}`).val()) / 4;
                insurance_data.push(parseInt($(`#insurance-input${i + 1}`).val()));
            }
            else if (select_values_insurance[i] == "6") {
                total_insurance += parseInt($(`#insurance-input${i + 1}`).val()) / 6;
                insurance_data.push(parseInt($(`#insurance-input${i + 1}`).val()));
            }
            else if (select_values_insurance[i] == "12") {
                total_insurance += parseInt($(`#insurance-input${i + 1}`).val()) / 12;
                insurance_data.push(parseInt($(`#insurance-input${i + 1}`).val()));
            }
            else {
                total_insurance += parseInt($(`#insurance-input${i + 1}`).val());
                insurance_data.push(parseInt($(`#insurance-input${i + 1}`).val()));
            }
        }

        // Calculating loan emi Cost Input Values
        for (var i = 0; i < select_values_loan.length; i++) {

            if (select_values_loan[i] == "4") {
                total_loan += parseInt($(`#loan-input${i + 1}`).val()) * 4;
                loan_data.push(parseInt($(`#loan-input${i + 1}`).val()));
            }
            else if (select_values_loan[i] == "3") {
                total_loan += parseInt($(`#loan-input${i + 1}`).val()) / 4;
                loan_data.push(parseInt($(`#loan-input${i + 1}`).val()));
            }
            else if (select_values_loan[i] == "6") {
                total_loan += parseInt($(`#loan-input${i + 1}`).val()) / 6;
                loan_data.push(parseInt($(`#loan-input${i + 1}`).val()));
            }
            else if (select_values_loan[i] == "12") {
                total_loan += parseInt($(`#loan-input${i + 1}`).val()) / 12;
                loan_data.push(parseInt($(`#loan-input${i + 1}`).val()));
            }
            else {
                total_loan += parseInt($(`#loan-input${i + 1}`).val());
                loan_data.push(parseInt($(`#loan-input${i + 1}`).val()));
            }
        }


        // Calculating family Cost Input Values
        for (var i = 0; i < select_values_family.length; i++) {

            if (select_values_family[i] == "4") {
                total_family += parseInt($(`#family-input${i + 1}`).val()) * 4;
                family_data.push(parseInt($(`#family-input${i + 1}`).val()));
            }
            else if (select_values_family[i] == "3") {
                total_family += parseInt($(`#family-input${i + 1}`).val()) / 4;
                family_data.push(parseInt($(`#family-input${i + 1}`).val()));
            }
            else if (select_values_family[i] == "6") {
                total_family += parseInt($(`#family-input${i + 1}`).val()) / 6;
                family_data.push(parseInt($(`#family-input${i + 1}`).val()));
            }
            else if (select_values_family[i] == "12") {
                total_family += parseInt($(`#family-input${i + 1}`).val()) / 12;
                family_data.push(parseInt($(`#family-input${i + 1}`).val()));
            }
            else {
                total_family += parseInt($(`#family-input${i + 1}`).val());
                family_data.push(parseInt($(`#family-input${i + 1}`).val()));
            }
        }

        // Calculating entertainment Cost Input Values
        for (var i = 0; i < select_values_entertainment.length; i++) {

            if (select_values_entertainment[i] == "4") {
                total_entertainment += parseInt($(`#entertainment-input${i + 1}`).val()) * 4;
                entertainment_data.push(parseInt($(`#entertainment-input${i + 1}`).val()));
            }
            else if (select_values_entertainment[i] == "3") {
                total_entertainment += parseInt($(`#entertainment-input${i + 1}`).val()) / 4;
                entertainment_data.push(parseInt($(`#entertainment-input${i + 1}`).val()));
            }
            else if (select_values_entertainment[i] == "6") {
                total_entertainment += parseInt($(`#entertainment-input${i + 1}`).val()) / 6;
                entertainment_data.push(parseInt($(`#entertainment-input${i + 1}`).val()));
            }
            else if (select_values_entertainment[i] == "12") {
                total_entertainment += parseInt($(`#entertainment-input${i + 1}`).val()) / 12;
                entertainment_data.push(parseInt($(`#entertainment-input${i + 1}`).val()));
            }
            else {
                total_entertainment += parseInt($(`#entertainment-input${i + 1}`).val());
                entertainment_data.push(parseInt($(`#entertainment-input${i + 1}`).val()));
            }
        }

        // Calculating invest Cost Input Values
        for (var i = 0; i < select_values_invest.length; i++) {

            if (select_values_invest[i] == "4") {
                total_invest += parseInt($(`#invest-input${i + 1}`).val()) * 4;
                invest_data.push(parseInt($(`#invest-input${i + 1}`).val()));
            }
            else if (select_values_invest[i] == "3") {
                total_invest += parseInt($(`#invest-input${i + 1}`).val()) / 4;
                invest_data.push(parseInt($(`#invest-input${i + 1}`).val()));
            }
            else if (select_values_invest[i] == "6") {
                total_invest += parseInt($(`#invest-input${i + 1}`).val()) / 6;
                invest_data.push(parseInt($(`#invest-input${i + 1}`).val()));
            }
            else if (select_values_invest[i] == "12") {
                total_invest += parseInt($(`#invest-input${i + 1}`).val()) / 12;
                invest_data.push(parseInt($(`#invest-input${i + 1}`).val()));
            }
            else {
                total_invest += parseInt($(`#invest-input${i + 1}`).val());
                invest_data.push(parseInt($(`#invest-input${i + 1}`).val()));
            }
        }







        // Saving Tax total values on array
        chartData.data[0] = total_tax;
        chartData.data[1] = total_household;
        chartData.data[2] = total_living;
        chartData.data[3] = total_education;
        chartData.data[4] = total_medical;
        chartData.data[5] = total_transport;
        chartData.data[6] = total_insurance;
        chartData.data[7] = total_loan;
        chartData.data[8] = total_family;
        chartData.data[9] = total_entertainment;
        chartData.data[10] = total_invest;

        // Saving total tax & tax input values data to local storage
        localStorage.setItem("chart_data", JSON.stringify(chartData.data));

        // Saving tax data to local storage
        localStorage.setItem("tax_input_data", JSON.stringify(tax_data));

        // Saving income data to local storage
        localStorage.setItem("income_data", JSON.stringify(income_data));

        // Saving household data to local storage
        localStorage.setItem("household_data", JSON.stringify(household_data));

        // Saving living cost data to local storage
        localStorage.setItem("living_data", JSON.stringify(living_data));

        // Saving education cost data to local storage
        localStorage.setItem("education_data", JSON.stringify(education_data));

        // Saving medical cost data to local storage
        localStorage.setItem("medical_data", JSON.stringify(medical_data));

        // Saving medical cost data to local storage
        localStorage.setItem("transport_data", JSON.stringify(transport_data));

        // Saving insurance cost data to local storage
        localStorage.setItem("insurance_data", JSON.stringify(insurance_data));

        // Saving insurance cost data to local storage
        localStorage.setItem("loan_data", JSON.stringify(loan_data));

        // Saving insurance cost data to local storage
        localStorage.setItem("family_data", JSON.stringify(family_data));

        // Saving entertainment cost data to local storage
        localStorage.setItem("entertainment_data", JSON.stringify(entertainment_data));

        // Saving invest cost data to local storage
        localStorage.setItem("invest_data", JSON.stringify(invest_data));



       

        

        



        // Refresh the page whenever save button is clicked.
        location.reload(true);

        for(var i=0;i<chartData.data.length;i++){
            total_expdid +=  chartData.data[i];
        }

        localStorage.setItem("total_expenditure", JSON.stringify(total_expdid));
        
        

    })

    
    





    // Retriving total tax & tax input values data from local storage
    var tax_data_retrive = JSON.parse(localStorage.getItem("tax_input_data"));
    var chart_data_retrive = JSON.parse(localStorage.getItem("chart_data"));

    // Retriving income data from local storage
    var income_data_retrive = JSON.parse(localStorage.getItem("income_data"));

    // Retriving household data from local storage
    var household_data_retrive = JSON.parse(localStorage.getItem("household_data"));

    // Retriving living data from local storage
    var living_data_retrive = JSON.parse(localStorage.getItem("living_data"));

    // Retriving education data from local storage
    var education_data_retrive = JSON.parse(localStorage.getItem("education_data"));

    // Retriving education data from local storage
    var medical_data_retrive = JSON.parse(localStorage.getItem("medical_data"));

    // Retriving education data from local storage
    var transport_data_retrive = JSON.parse(localStorage.getItem("transport_data"));

    // Retriving insurance data from local storage
    var insurance_data_retrive = JSON.parse(localStorage.getItem("insurance_data"));

    // Retriving insurance data from local storage
    var loan_data_retrive = JSON.parse(localStorage.getItem("loan_data"));

    // Retriving insurance data from local storage
    var family_data_retrive = JSON.parse(localStorage.getItem("family_data"));

    // Retriving entertainment data from local storage
    var entertainment_data_retrive = JSON.parse(localStorage.getItem("entertainment_data"));

    // Retriving invest data from local storage
    var invest_data_retrive = JSON.parse(localStorage.getItem("invest_data"));



    // Printing tax input values to input fields
    for (var i = 0; i < tax_data_retrive.length; i++) {
        $(`#tax-input${i + 1}`).val(tax_data_retrive[i]);
    }

    // Printing income values to input fields
    for (var i = 0; i < income_data_retrive.length; i++) {
        $(`#income-input${i + 1}`).val(income_data_retrive[i]);
    }

    // Printing household values to input fields
    for (var i = 0; i < household_data_retrive.length; i++) {
        $(`#house-input${i + 1}`).val(household_data_retrive[i]);
    }

    // Printing living cost values to input fields
    for (var i = 0; i < living_data_retrive.length; i++) {
        $(`#living-input${i + 1}`).val(living_data_retrive[i]);
    }

    // Printing education cost values to input fields
    for (var i = 0; i < education_data_retrive.length; i++) {
        $(`#education-input${i + 1}`).val(education_data_retrive[i]);
    }

    // Printing medical cost values to input fields
    for (var i = 0; i < medical_data_retrive.length; i++) {
        $(`#medical-input${i + 1}`).val(medical_data_retrive[i]);
    }

    // Printing transport cost values to input fields
    for (var i = 0; i < transport_data_retrive.length; i++) {
        $(`#transport-input${i + 1}`).val(transport_data_retrive[i]);
    }

    // Printing insurance cost values to input fields
    for (var i = 0; i < insurance_data_retrive.length; i++) {
        $(`#insurance-input${i + 1}`).val(insurance_data_retrive[i]);
    }

    // Printing loan cost values to input fields
    for (var i = 0; i < loan_data_retrive.length; i++) {
        $(`#loan-input${i + 1}`).val(loan_data_retrive[i]);
    }

    // Printing family cost values to input fields
    for (var i = 0; i < family_data_retrive.length; i++) {
        $(`#family-input${i + 1}`).val(family_data_retrive[i]);
    }

    // Printing entertainment cost values to input fields
    for (var i = 0; i < entertainment_data_retrive.length; i++) {
        $(`#entertainment-input${i + 1}`).val(entertainment_data_retrive[i]);
    }

    // Printing invest cost values to input fields
    for (var i = 0; i < invest_data_retrive.length; i++) {
        $(`#invest-input${i + 1}`).val(invest_data_retrive[i]);
    }



    // Tax form header
    $(".total-tax span").text(parseFloat(chart_data_retrive[0]).toFixed(2));

    // Income form header
    $(".total-income span").text(parseFloat(income_data_retrive[0]).toFixed(2));


    // household form header
    $(".total-housebill span").text(parseFloat(chart_data_retrive[1]).toFixed(2));


    // living cost form header
    $(".total-livingcost span").text(parseFloat(chart_data_retrive[2]).toFixed(2));

    // education cost form header
    $(".total-educationcost span").text(parseFloat(chart_data_retrive[3]).toFixed(2));

    // medical cost form header
    $(".total-medicalcost span").text(parseFloat(chart_data_retrive[4]).toFixed(2));

    // transport cost form header
    $(".total-transportcost span").text(parseFloat(chart_data_retrive[5]).toFixed(2));

    // insurance cost form header
    $(".total-insurance span").text(parseFloat(chart_data_retrive[6]).toFixed(2));

    // loan emi cost form header
    $(".total-emicost span").text(parseFloat(chart_data_retrive[7]).toFixed(2));

    // family cost form header
    $(".total-familycost span").text(parseFloat(chart_data_retrive[8]).toFixed(2));

    // family cost form header
    $(".total-entertainmentcost span").text(parseFloat(chart_data_retrive[9]).toFixed(2));

    // Invest cost form header
    $(".total-investmentcost span").text(parseFloat(chart_data_retrive[10]).toFixed(2));


    // Summery section calculation
    var cal_income = JSON.parse(localStorage.getItem("income_data"));
    var cal_exp = JSON.parse(localStorage.getItem("total_expenditure"));
    $(".net-income span").text(parseFloat(cal_income[0]).toFixed(2)+" INR");
    $(".net-exp span").text(parseFloat(cal_exp).toFixed(2)+" INR");
    $(".net-saving span").text(parseFloat(cal_income[0]-cal_exp).toFixed(2)+" INR");

    var goal_saving = cal_income[0]-cal_exp;

    if(goal_saving<cal_income[1]){
        // alert("Goal not reached");
        $(".summery-result p").text("You did not reached your monthly saving goal");
    }
    else if(goal_saving>cal_income[1]){
        $(".summery-result p").text("Congrats!! You reached your monthly saving goal");
    }
    else{
        $(".summery-result p").text("Here you will get your  budget status");
    }

    $("#print-button").click(function(){
        window.print();
        return false;
    });



    // Chart Section
    const myChart = $(".my-chart");
    const ul = $(".details ul");

    new Chart(myChart, {

        type: "doughnut",

        data: {
            labels: chartData.labels,
            datasets: [
                {
                    label: "  Expense",
                    data: JSON.parse(localStorage.getItem("chart_data")),
                }
            ]
        },

        options: {
            borderWidth: 10,
            borderRadius: 2,
            hoverBorderWidth: 0,

            plugins: {
                legend: {
                    display: false,
                },
            }

        }
    })


    function populateUL() {
        chartData.labels.forEach(function (l, i) {
            $(".details ul").append(`<li>${l}:<span class="Percentage">  ${parseFloat(chart_data_retrive[i]).toFixed(2)} <i
            class="fa-solid fa-indian-rupee-sign"></i></span></li>`);
        })
    };

    populateUL();

    // for(var i=0;i<=select_values_household.length;i++){
    //     console.log(select_values_household);
    // }

    

});