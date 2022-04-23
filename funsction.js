let total_fee = 0;

student_Array.forEach( (data,i) =>{

    // Female Studens
    // if(data[4] === 'female'){

        
    //     console.log(`   
    
    //     Name: ${data[0]}
    //     Roll: ${data[1]}
    //     Age: ${data[2]}
    //     Class: ${data[3]}
    //     Address: ${data[5]}
    //     Fees: ${data[6]}
        
        
    //     `);
    // };

    // Student Age

    // if( data[2] > 10 && data[2] <=25 ){
    //     console.log(`
        
    //     Name: ${data[0]}
    //     Roll: ${data[1]}
    //     Age: ${data[2]}
    //     Class: ${data[3]}
    //     Gender: ${data[4]}
    //     Address: ${data[5]}
    //     Fees: ${data[6]}
        
    //     `);
    // };

    // class wise student result

    // if( data[3] == '11'){
    //     console.log(` 

    //     Class ${data[3]} student result sheet is

    //     Name: ${data[0]}
    //     Roll: ${data[1]}
    //     Age: ${data[2]}
    //     Class: ${data[3]}
    //     Gender: ${data[4]}
    //     Address: ${data[5]}
    //     Fees: ${data[6]}
        
    //     `);
    // };
    // if( data[3] == '10'){
    //     console.log(` 

    //     Class ${data[3]} student result sheet is

    //     Name: ${data[0]}
    //     Roll: ${data[1]}
    //     Age: ${data[2]}
    //     Class: ${data[3]}
    //     Gender: ${data[4]}
    //     Address: ${data[5]}
    //     Fees: ${data[6]}
        
    //     `);
    // };
   
    // if( data[3] == '9'){
    //     console.log(` 

    //     Class ${data[3]} student result sheet is

    //     Name: ${data[0]}
    //     Roll: ${data[1]}
    //     Age: ${data[2]}
    //     Class: ${data[3]}
    //     Gender: ${data[4]}
    //     Address: ${data[5]}
    //     Fees: ${data[6]}
        
    //     `);
    // };

    // Location wise student result

        // console.log(` 

        // Location : ${data[5]} student result sheet is

        // Name: ${data[0]}
        // Roll: ${data[1]}
        // Age: ${data[2]}
        // Class: ${data[3]}
        // Gender: ${data[4]}
        // Address: ${data[5]}
        // Fees: ${data[6]}
        
        // `);


    
// Total Addmission fees
    total_fee += Number(data[6]);

  
});


console.log(`

==============================================================================
Total Admnission fees :  ${total_fee}



`);