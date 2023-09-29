income = float(input("Enter your income: "))
tax_payable = 0

if income <= 18200:
    tax_payable = 0
elif income <= 45000:
    tax_payable = (income - 18200) * 0.1
elif income <= 120000:
    tax_payable = 5000 + (income - 45000) * 0.3
elif income <= 180000:
    tax_payable =7000 + (income - 120000) * 0.5
else:
    tax_payable = 10000 + (income - 180000) * 0.7

print(tax_payable)
