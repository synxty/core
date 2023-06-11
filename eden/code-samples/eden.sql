/*
Eden is full of beautiful islands...
*/
SELECT *,
       length * width AS area
FROM ISLAND
-- ...one of them is named Elysian
WHERE name = 'Elysian'
  AND 'Sunsets' IN (SELECT * FROM FEATURE WHERE island_id = ISLAND.id)
  AND 'Beaches' IN (SELECT * FROM FEATURE WHERE island_id = ISLAND.id);
