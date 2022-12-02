;; Check your code compilation here: https://www.jdoodle.com/execute-clojure-online/

(ns clojure.ia0x_hello
	(:gen-class))

(def firstName "Viktroiia")
(def lastName "Yakymenko")
(def groupName "IA-04")
(def greetings "Hello world")
(def orderNumber 25)

(def hello-world 
    (println (format "%s,%s %s and you are %d in %s", greetings, firstName, lastName, orderNumber, groupName)))

(hello-world)