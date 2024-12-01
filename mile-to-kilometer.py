from tkinter import *


def miles_to_kilometer():
    answer = float(mile_entry.get())
    answer *= 1.60934
    label_ratio.config(text=f"{answer}")



# TODO: create window
##### First line of GUI code
window = Tk()
window.title("Mile To Kilometer Convertor")
window.minsize(width=200, height=100)
window.config(padx=5, pady=5)


# TODO: create Labels
# label_01 = Label(text="I am a label", font=("Arial", 24, "bold"))
# label_01.grid(column=0, row=0)

label_value = Label()
label_value.config(text="Value")
label_value.grid(column=0, row=0)
label_value.config(padx=5, pady=5)

label_Miles = Label()
label_Miles.config(text="Miles")
label_Miles.grid(column=2, row=0)
label_Miles.config(padx=5, pady=5)

label_km = Label()
label_km.config(text="Km")
label_km.grid(column=2, row=1)
label_km.config(padx=5, pady=5)

label_is_eq_to = Label()
label_is_eq_to.config(text="is equal to")
label_is_eq_to.grid(column=0, row=1)
label_is_eq_to.config(padx=5, pady=5)

label_ratio = Label()
label_ratio.config(text="1.60934")
label_ratio.grid(column=1, row=1)
label_ratio.config(padx=5, pady=5)



# TODO: Buttons
calculate_button = Button(text="Calculate", command=miles_to_kilometer)
calculate_button.grid(column=1, row=3)

# button2 = Button(text="Click Me")
# button2.grid(column=2, row=0)


# TODO: Entries
mile_entry = Entry(width=10)
#Add some text to begin with
mile_entry.insert(END, string="1")
mile_entry.grid(column=1, row=0)

window.mainloop()
