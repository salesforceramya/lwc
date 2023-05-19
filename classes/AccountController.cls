public class AccountController {

   @AuraEnabled(Cacheable=true) 
   public static List<Account> getAccountList()
   {
     return [SELECT 
             Id, Name, Industry, Rating, AnnualRevenue
             from Account
             ];
   }

   //GET data based on criteria rating

   @AuraEnabled(Cacheable=true) 
   public static List<Account> getAccountRatingList(String Rating)
   {
    return [SELECT 
            Id, Name, Industry, Rating 
            from Account
            Where Rating=:Rating and Rating!=null
            ];
   }

   //Get rec based on rating

   @AuraEnabled(Cacheable=true) 
   public static List<Account> getAccountRating()
   {
    return [SELECT 
            Id, Name, Industry, Rating 
            from Account
            ];
   }

   @AuraEnabled(Cacheable=true)
   public static List<Account> getAllAccounts(string accountName)
   {
        List<Account> accList = [SELECT Id, Name, BillingState, AnnualRevenue from Account where Name = : accountName];
        return accList;
   }

   @AuraEnabled
   public static void updateRevenue(String recId)
   {
        Account acc = new Account();
        acc.Id=recId;
        acc.AnnualRevenue=3000;
        update acc;
   }

   @AuraEnabled
   public static void deleteAccounts(String recId)
   {
     delete recId;
   }
}