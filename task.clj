;; Check your code compilation here: https://www.jdoodle.com/execute-clojure-online/

(ns clojure.ia0x_hello
	(:gen-class))

(def firstName "Your name")
(def lastName "Your surname")
(def groupName "IA-0X")
(def greetings "Hello world")
(def orderNumber 0)

(def hello-world 
    (println (format "%s,%s %s and you are %d in %s", greetings, firstName, lastName, orderNumber, groupName)))

(hello-world)