{ Check your code compilation result at: https://www.onlinegdb.com/online_pascal_compiler }

program Hello;

uses sysutils;

var 
    FirstName, LastName, Greetings: string;
    GroupNumber, OrderNumber: integer;
    Output: string;

begin
  FirstName := 'Your name';
  LastName := 'Your surname';
  GroupNumber := -1;
  OrderNumber := -1;
  Greetings := 'Hello world';
  
  Output := Greetings + ', ' + FirstName + ' ' + LastName + ', IA-0' + IntToStr(GroupNumber) + ', Order: ' + IntToStr(OrderNumber);  
  
  writeln(Output)
end.