// TypeScript Enum
// Example 1
var Month;
(function (Month) {
    Month[Month["Jan"] = 0] = "Jan";
    Month[Month["Feb"] = 1] = "Feb";
    Month[Month["Mar"] = 2] = "Mar";
    Month[Month["Apr"] = 3] = "Apr";
    Month[Month["May"] = 4] = "May";
    Month[Month["Jun"] = 5] = "Jun";
    Month[Month["Jul"] = 6] = "Jul";
    Month[Month["Aug"] = 7] = "Aug";
    Month[Month["Sept"] = 8] = "Sept";
    Month[Month["Oct"] = 9] = "Oct";
    Month[Month["Nov"] = 10] = "Nov";
    Month[Month["Dec"] = 11] = "Dec";
})(Month || (Month = {}));
;
function isItSummer(month) {
    var isSummer;
    switch (month) {
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
}
;
console.log(isItSummer(Month.Apr)); // Access the result or output
console.log(isItSummer(1)); // Can access by numeric value
console.log(typeof Month); // Enum type is Object
// Example 1
var ApprovalSratus;
(function (ApprovalSratus) {
    ApprovalSratus[ApprovalSratus["draft"] = 0] = "draft";
    ApprovalSratus[ApprovalSratus["submitted"] = 1] = "submitted";
    ApprovalSratus[ApprovalSratus["approved"] = 2] = "approved";
    ApprovalSratus[ApprovalSratus["rejected"] = 3] = "rejected";
})(ApprovalSratus || (ApprovalSratus = {}));
;
var request = {
    id: 1,
    status: ApprovalSratus.approved,
    description: 'Please approve the request!',
};
if (request.status === ApprovalSratus.approved) {
    // Send Email Notifications
    console.log('Send email to the Applicant...');
}
;
