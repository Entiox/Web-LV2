# LV 2 zadatak - JavaScript komandne aplikacije

Zadatak je napraviti command line JavaScript aplikaciju koja će simulirati košaricu u web stranici za trgovinu. Sučelje, specifikaciju i rad aplikacije morate dizajnirati sami. Obratite pozornost na lakoću korištenja aplikacije. Npr. možda je lakše korisniku upisati “kupi patike” nego “kupi item-125sa4134d”, ili je možda dobra značajka imati mogućnost pretrage proizvoda. 

Dizajn sučelja, sigurnost (provjera greški i sl.), lakoća korištenja (dizajn sučelja, korisne greške, postoji li “help” komanda i sl.) i potpunost rješenja će se bodovati.

Minimalni zahtjevi su da korisnik može vidjeti popis svih artikala, vidjeti svoju košaricu, dodavati i brisati artikle iz košarice te kupiti sve odabrane proizvode (ako za to ima novaca). Svaku komandu/akciju je potrebno definirati u zasebnoj funkciji.

U **main.js** postoji kod kojeg možete koristiti kao početnu točku za razvoj aplikacije.

Nakon što je aplikacija izrađena, potrebno je napisati dokumentaciju (uređivanjem ovog README dokumenta) koja opisuje sve moguće komande, njihove argumente i što obavljaju ili vračaju. Npr.

> buy 
> > Calculates amount of money to pay depending on the items in cart, if there is sufficient amount of money in wallet items to be purchased are displayed, wallet money is deducted by
> > amount to pay and cart is emptied, in contrary message about insufficient funds is displayed.
>
> addToCart 
> > Argument is array of item names to add to cart, for each of these item names, the item name is first checked if it matches any of the names of available items, if yes item with
> > that names is added inside cart array and message about addition is displayed, in contrary message about being unable to find item is displayed.
>
> removeFromCart 
> > Argument is array of item names to add to cart, for each of these item names, the item name is first checked if it matches any of the names of cart items, if yes item with such 
> > name is removed from cart and message about removal is displayed, in contrary message about being unable to find item inside cart is displayed.
>
> addFunds 
> > Argument is number representing amount of funds to add to wallet, first the argument is checked if it is a number, if yes it is added to walletAmount variable,
> > in contrary message that argument is not a number is displayed.
>
> displayWallet 
> > Displays value of walletAmount variable inside message about current funds inside wallet.

> displayItems 
> > Argument is array of objects which must have parameter name and price and message with these parameters is displayed if array size is not 0, otherwise message that there are 
> > no items is displayed. This function is used for displaying available items and items inside cart.
>
> displayHelp 
> > Displays information about usage of the application.
>
> checkArguments 
> > Arguments are array of arguments and flag, flag represents what should be checked: if 1 array of arguments must have no elements, if 2 array of arguments must have at least 1 element 
> > and if 3 array of arguments must have exactly 1 element, if array doesnt fulfill corresponding check appropriate message is displayed and returned values are different that 0 
> > otherwise returned valued is 0.
>
> Application works in the way where user writes commands with corresponding arguments and these commands are executed if the number of arguments is valid. That check of arguments 
> is done in the way where function checkArguments is called, if it returns value other than 0 the function which corresponds to given command is not called because it is called after
> checkArguments function and logical OR (||) operator which means result is already truthy after checkArguments call which returns number other than 0, so the 
> function after that operator is not called in that case. User can execute commands for adding item(s) to cart, removing item(s) from cart (when writing item name(s) program is 
> case-insensitive on these values, user can add or remove same item more than once in same command call, for example "add apple apple"), adding funds to wallet, displaying wallet, 
> displaying help, displaying cart and available items and buying items from cart.

Osim toga, potrebno je opisati općeniti dizajn komandne aplikacije, na što ste obraćali pozornost te generalne upute kako koristiti aplikaciju. Zamislite da pišete README za javni GitHub repozitorij vaše aplikacije.

## Pokretanje JavaScript komandnih aplikacija

Potrebno je instalirati Node: [https://nodejs.dev/en/](https://nodejs.dev/en/)

Nakon instalacije, moguće je pokretati JavaScript datoteke iz terminala:

```shell
node main.js
```

## Resursi

Ideje o tome kako dizajnirati komandno sučelje

- [https://clig.dev/#guidelines](https://clig.dev/#guidelines)
- [https://www.makeareadme.com](https://www.makeareadme.com/)

JavaScript osnove:

- [https://developer.mozilla.org/en-US/docs/Learn/Getting_started_with_the_web/JavaScript_basics](https://developer.mozilla.org/en-US/docs/Learn/Getting_started_with_the_web/JavaScript_basics)
- [https://javascript.info/first-steps](https://javascript.info/first-steps)