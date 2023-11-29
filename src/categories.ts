const categories = ["Groceries", "Utilities", "Entertainment"] as const;
//dodajemy as const, poniewaz zod oczekuje, zeby były stałe, a bez tego wciąz mozemy dodawac do talbicy za pomocą push
//umieszczamy w osobnym pliku z uwagi na kolejność importowania/eksportowania w app
export default categories;