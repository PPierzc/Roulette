# Roulette

## Api

#### Saldo
wysyłamy zapytanie typu POST na serwer bazy danych na endpoint "/join"
przyjmuje on dwa elementy w body zapytania: userID i gameID, zwraca status i saldo

#### Auth
wysyłamy zapytanie typu POST na serwer bazy danych na endpoint "/auth"
przyjmuje on dwa elementy w body zapytania: email i pass, zwraca status, name, id, access_token

#### New Game
wysyłamy zapytanie typu POST na serwer bazy danych na endpoint "/newGame"
przyjmuje on dwa elementy w body zapytania: name, zwraca status i wiadomość
