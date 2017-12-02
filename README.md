# Roulette

## Api

#### Saldo
wysyłamy zapytanie typu POST na serwer bazy danych na endpoint "/join"
przyjmuje on dwa elementy w body zapytania: userID i gameID, zwraca saldo

#### Auth
wysyłamy zapytanie typu POST na serwer bazy danych na endpoint "/auth"
przyjmuje on dwa elementy w body zapytania: email i pass, zwraca name, id, access_token
