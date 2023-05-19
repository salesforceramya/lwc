public class ContactController {
    
    @AuraEnabled
    public static String insertContact(String lastName, String Mobile, String accId)
    {
        Contact contact=new Contact();
        contact.LastName=lastName;
        contact.MobilePhone=Mobile;
        contact.AccountId=accId;
        insert contact;
        return contact.Id;
    }
}