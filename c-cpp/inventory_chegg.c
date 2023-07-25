#include <stdio.h>
#include <string.h>
#include <stdlib.h>
struct details
    {
        char name[20];
        char company[20];
        int price;
        int qty;
    };

int look_up(struct details table[],char s1[],char s2[],int m);
// void get (charstring [ ] );
// int cartValue(struct details cart[],char item_name[],char company_name[],int p, int q,int index);  
void main()
{
    struct details item[50], item_taken[50];
    int no_of_records, i, j=0, index, total_price=0;
    char select_name[20], select_company[20], response[10], quantity[10]; ;
    printf("Enter number of items:");
    scanf("%d", &no_of_records);
    fflush(stdin);
    for (i = 0; i < no_of_records; i++)
    {
        fflush(stdin);
        printf("Item: \n");
        scanf("%s", item[i].name);
        fflush(stdin);
        printf("Company: \n");
        scanf("%s", item[i].company);
        fflush(stdin);
        printf("Quantity: \n");
        scanf("%d", &item[i].qty);
        fflush(stdin);
        printf("price: \n");
        scanf("%d",  &item[i].price);
        fflush(stdin);
    }
    printf("         *****  INVENTORY  ***** \n");
    printf("------------------------------------------------------------------\n");
    printf("S.N.|    ITEM       |   COMPANY   |       QUANTITY |     PRICE\n");
    printf("------------------------------------------------------------------\n");
    for (i = 0; i < no_of_records; i++)
        printf("%d     %-15s        %-15s      %-5d     %-5dOMR\n", i + 1, item[i].name, item[i].company, item[i].qty,item[i].price);
    printf("------------------------------------------------------------------\n");
    do{
        printf("To buy from store, Enter item and company name of a product as per the inventory\n");  
        printf("\nITEM:    ");
        scanf("%s", select_name);
        fflush(stdin);                                                                                 
        printf("COMPANY:   ");
        scanf("%s", select_company);
        fflush(stdin);                                     
        index = look_up(item, select_name, select_company, no_of_records);

        if(index != -1)     /*  Product found  */
        {                                                         
            printf("\n%-15s %-15s %-5d %-5dOMR\n\n",item[index].name,item[index].company,item[index].qty,item[index].price);                      
                                                                    
            printf("Enter number of quantites:");
            scanf("%s", quantity);
            fflush(stdin);                                
            if(atoi(quantity) < item[index].qty){
              item[index].qty = item[index].qty-atoi(quantity);
              printf("Cost of %d product = %-5d\n",atoi(quantity),item[index].price * atoi(quantity));
              // total_price = total_price + cartValue(item, item[index].name, item[index].company,atoi(quantity),item[index].price,j);
              total_price = total_price + (item[index].price * atoi(quantity));
              strcpy(item_taken[j].name, item[index].name);
              strcpy(item_taken[j].company, item[index].company);
              item_taken[j].qty = atoi(quantity);
              item_taken[j].price =  item[index].price * atoi(quantity);
              j++;
            }             
            else                                                  
              printf("\nRequired quantites not in stock\n\n");      
          }                                                         
          else                                                     
              printf("\nItem not in list\n\n");                     
                                                                    
          printf("\nDo you want any other item? (YES / NO):");
          scanf("%s", response);
          fflush(stdin);      
    }while(response[0] == 'Y' || response[0] == 'y');
    printf("-------------------------------BILL-------------------------------\n\n");
    printf("S.N.|    ITEM         |   COMPANY   |       QUANTITY |     PRICE\n");
    for (i = 0; i < j; i++)
        printf("%d     %-15s        %-15s     %-5d     %-5dOMR\n", i + 1, item_taken[i].name, item_taken[i].company, item_taken[i].qty,item_taken[i].price);
    printf("------------------------------------------------------------------\n");
    printf("\nTotal Price : %d OMR",total_price);             
    printf("\n------------------------------------------------------------------\n");
    printf("\n\nThank you.  Visit Again!\n"); 
}
int look_up(struct details table[],char s1[],char s2[],int m)                                    
{                                                                
  int  i;                                                       
  for(i = 0; i < m;  i++)                                       
     if(strcmp(s1, table[i].name) == 0 && strcmp(s2, table[i].company) == 0)                       
        return(i);           /* product found       */
  return(-1);                /* product not found   */       
} 
// int cartValue(struct details cart[],char item_name[],char company_name[],int p, int q, int index)                                    
// {                                                                                                                       
//   strcpy(cart[index].name, item_name);
//   strcpy(cart[index].company, company_name);
//   cart[index].qty = p;
//   cart[index].price =  q;
//   return (cart[index].qty * cart[index].price);      
// } 