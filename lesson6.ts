// TypeScript Enum

// Example 1
enum Month { Jan, Feb, Mar, Apr, May, Jun, Jul, Aug, Sept, Oct, Nov, Dec };

function isItSummer(month: Month){
    let isSummer: boolean;
    switch(month){
        case Month.Apr:
        case Month.May:
        case Month.Jun:
        isSummer = true;
        break;
       case Month.Jul:
       case Month.Aug:
       
       default:
        isSummer = false;
        break;
    }

    return isSummer;
};

console.log(isItSummer(Month.Apr)); // Access the result or output
console.log(isItSummer(1));  // Can access by numeric value
console.log(typeof Month); // Enum type is Object

// Example 1
enum ApprovalSratus {
    draft, submitted, approved, rejected,
};

const request = {
    id: 1,
    status: ApprovalSratus.approved,
    description: 'Please approve the request!',
};

if(request.status === ApprovalSratus.approved){
    // Send Email Notifications
    console.log('Send email to the Applicant...');
};


