public with sharing class ContactController {
    @AuraEnabled
    public static List<Contact> getContacts() {
        try {
            return [Select Id, FirstName, LastName, Email from contact limit 10];
        } catch (Exception e) {
            throw new AuraHandledException(e.getMessage());
        }
    }
}
