# გააკეთეთ 5 მაგალთი ყველა შედარების ოპერატორზე
#true 
print(61 == 61)
print(9 >= 8)
print(5 <= 9)
print(8 != 7)
print(7 >= 6)

#false 
print(2 == 3)
print(5 > 10)
print(10 <= 5)
print(2 == 9)
print(5 <= 3)
print(7 >= 9)

a = 5 
b = 10

result = (a < 10) and (b > 5) # აბრუნებს true რადგან ორივე პირობა ჭეშმარიტია

result2 = (a > 10) and (b > 5) #აბრუნებს false რადგან პირველი პირობა არ არის ჭეშმარი

result3 = (a < 10) or (b < 5) #აბრუნებს true  რადგან პირველი პირობა ჭეშმარიტია

result4 = (a > 10) or (b < 5) #აბრუნებს  false რადგან არცერთი პირობა არ არის ჭეშმარიტი



#თქვენი სიტყვებით ახსენით კონკატინაცია
# კონკატენაცია არის პროცესი როდესაც ორი ან მეტი სტრინგი (ტექსტი) ერთიანდებია ისე,რომ წარმოიქმნება ახალი სტრინგი მაგალითად როდესაც გვსურს 
# hello და world შემდეგი იქნება "helloworld"



#მომხარებელს შემოატანინეთ მისი ასაკი, როგორც სტრინგი და დაბეჭდეთ მისი ტიპი. შემდეგ შეუცვალეთ მას მონაცემთა ტიპი ჯერ integer-ად, შემდეგ
#  float-ად (ყოველ გარდაქმნაზე დაბეჭდეთ შედეგი)

age_str = input("შეიტანეთ თვენი ასაკი: ")

#დაბეჭდეთ ტიპი (სტრინგი) 
print(type(age_str)) #გამოუშვებს სტრინგის ტიპს 

#პრიველი გადარქმნა: სტრინგიდან 
age_int = int(age_str)

print("integer value:", age_int) #დაბეჭდავს: Integer value: [ასაკი]
print("მეორე ტიპი", type (age_int)) #გაუშვებს integer-ის ტიპს

#მეორე გარდაქმნა: integer-იდან float-ში
age_float = float(age_int)
print("float value:", age_float) #დაბეჭდავს: float value: [ასაკი.0]
print(type(age_float))   #გამოუშვებს float-ის ტიპს 



#მომხმარებელს შემოატანინეთ მისი სახელი და პაროლი, ხოლო შემდეგ შეამოწმეთ სახელი თუ უდრის შეყვანილ სახელს და ასევე პაროლი თუ უდრის შეყვანილ
#პაროლს

#წინასწარ გამსაზღვრული სახელი და პაროლი 
correct_name = "Data"
correct_pasword = "pass456"

#მომხმარებლის სახელის და პაროლის შეყვანა
name = input("შეიტანეთ თქვენი სახელი:  ")
password = input("შეიყვანეთ თქვენი პაროლი:  ")

#სახის და პაროლის შემოწმება
if name == correct_name and password == correct_pasword:
    print("შესასვლელი წარმატებთ განახორციელდა!")
    print("არასწორი სახელი ან პაროლi")