#დაბეჭდეთ 1-დან 100-მდე ყველა ლუწი რიცხვის საშუალო არითმეტიკული. გამოიყენეთ while loop. (ვინც არ იცით არითმეტიკული, მაშინ მოიძიეთ ინფორმაცია

# სტარტული მნიშვნელობები
#sum_of_even_numbers = 0  # ლუწი რიცხვების ჯამი
#count_of_even_numbers = 0  # ლუწი რიცხვების რაოდენობა

# while ციკლი ლუწი რიცხვების გასავლელად
#i = 2  # პირველი ლუწი რიცხვი
#while i <= 100:
    #sum_of_even_numbers += i  # დამატება ჯამში
    #count_of_even_numbers += 1  # გაზრდა რიცხვების რაოდენობაზე
    #i += 2  # შემდეგი ლუწი რიცხვის გადასვლა

# საშუალო არითმეტიკულის გამოთვლა
#average = sum_of_even_numbers / count_of_even_numbers

# შედეგის დაბეჭდვა
#print("1-დან 100-მდე ლუწი რიცხვების საშუალო არითმეტიკული:", average)

#დაწერეთ პროგრამა, რომელიც მომხარებელს შემოატანინებს რიცხვს და დაბეჭდავს ეს რიცხვი დადებითია, უარყოფითია თუ 0-ია

# მომხმარებლისთვის რიცხვის შეყვანა
#number = float(input("შეიყვანეთ რიცხვი: "))დაბეჭდეთ 1-დან 100-მდე ყველა ლუწი რიცხვის საშუალო არითმეტიკული. გამოიყენეთ while loop. (ვინც არ იცით არითმეტიკული, მაშინ მოიძიეთ ინფორმაცია

# სტარტული მნიშვნელობები
#sum_of_even_numbers = 0  # ლუწი რიცხვების ჯამი
#count_of_even_numbers = 0  # ლუწი რიცხვების რაოდენობა

# while ციკლი ლუწი რიცხვების გასავლელად
#i = 2  # პირველი ლუწი რიცხვი
#while i <= 100:
    #sum_of_even_numbers += i  # დამატება ჯამში
    #count_of_even_numbers += 1  # გაზრდა რიცხვების რაოდენობაზე
    #i += 2  # შემდეგი ლუწი რიცხვის გადასვლა

# საშუალო არითმეტიკულის გამოთვლა
#average = sum_of_even_numbers / count_of_even_numbers

# შედეგის დაბეჭდვა
#print("1-დან 100-მდე ლუწი რიცხვების საშუალო არითმეტიკული:", average)

#დაწერეთ პროგრამა, რომელიც მომხარებელს შემოატანინებს რიცხვს და დაბეჭდავს ეს რიცხვი დადებითია, უარყოფითია თუ 0-ია

# მომხმარებლისთვის რიცხვის შეყვანა
#number = float(input("შეიყვანეთ რიცხვი: "))

# პირობა: თუ რიცხვი დადებითია, უარყოფითია თუ 0
#if number > 0:
   # print("რიცხვი დადებითია")
#elif number < 0:
   # print("რიცხვი უარყოფითია")
#else:
   # print("რიცხვი არის 0")

#დაწერეთ პროგრამა, რომელიც მომხარებელს შემოატანინებს წელს და გაიგებს არის თუ არა ის ნაკიანი(წელი როდესაც თებერვალში 29 დღე გვაქვს). ნაკიანი არის წელი თუ ის იყოფა 4-ზე და არ იყოფა 100-ზე ან იყოფა 400-ზე.(გამოიყენეთ and და or ოპერატორები)

# მომხმარებლისგან წელი შევიტანოთ
#year = int(input("შეიყვანეთ წელი: "))# წელზე გადამოწმება, არის თუ არა ნაკიანი
#if (year % 4 == 0 and year % 100 != 0) or (year % 400 == 0):
   # print(f"{year} არის ნაკიანი წელი")
#else:
   # print(f"{year} არ არის ნაკიანი წელი")

#მომხმარებელს შემოატანინეთ რიცხვი 1-დან 100-ის ჩათვლით(ეს იქნება მისი ქულა). თუ მაგალითად 90-დან 100-ის ჩათვლით ექნება ქულა გამოუტანეთ "Your grade is A", თუ 80-დან 90-მდე, გამოუტანეთ "Your grade is B", თუ 70-დან 80-მდე გამოუტანეთ "Your grade is C", სხვა შემთხვევაში გამოუტანეთ "Your grade is D"

# მომხმარებლისთვის ქულის შეყვანა
#score = int(input("შეიყვანეთ ქულა (1-დან 100-მდე): "))

# ქულის მიხედვით შეფასება
#if 90 <= score <= 100:
    #print("Your grade is A")
#elif 80 <= score < 90:
    #print("Your grade is B")
#elif 70 <= score < 80:
    #print("Your grade is C")
#else:
    #print("Your grade is D")