(comment
  "Eden is full of beautiful islands...")

(ns clj-eden)

(defstruct elysian :name :length :width :features)

(defn area
  [isln] (* (isln :length) (isln :width)))

;;...one of them is named Elysian
(let [i (struct elysian "Elysian" 300 350 '("Sunsets", "Beaches"))]
  (println (area i)))

