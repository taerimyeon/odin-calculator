# odin-calculator
The Odin Project: Calculator project repository

# How to Use
## Calculation
This calculator can only calculate two numbers at a time. If the user does not press on `=` button to get the result, pressing another operator will take the result from previous calculation to the next. Thus, chaining the calculation process.  
Users can choose to click on buttons or typing with keyboard when on desktop. To get the same function as pressing `=` button, users can either use `=` or `Enter` keys. As for `±` button, users need to use underscore (by holding `Shift` and followed by `-` keypress). As for `%` button, users need to hold `Shift` and followed by `5` keypress. As for `⌫` button, users need to press `Backspace` key.  
- Single calculation  
[<img src="./docs/images/Calculate_single.gif" alt="single_calculation" width="240"/>](./docs/images/Calculate_single.gif)
- Chaining calculation  
[<img src="./docs/images/Calculate_chaining.gif" alt="chaining_calculation" width="240"/>](./docs/images/Calculate_chaining.gif)
- Calculating with decimal number  
[<img src="./docs/images/Calculate_decimal.gif" alt="decimal_calculation" width="240"/>](./docs/images/Calculate_decimal.gif)
- Calculating with negative number  
[<img src="./docs/images/Calculate_negative.gif" alt="negative_calculation" width="240"/>](./docs/images/Calculate_negative.gif)
## Display Clear
- A single click on `⌫` button to clear one digit at a time (and also mathematical operator, if exists).  
[<img src="./docs/images/Delete_single.gif" alt="single_clear" width="240"/>](./docs/images/Delete_single.gif)
- A click and hold on `⌫` button for about 500ms will clear all previous result and reset the display to zero (performs AC operation).  
[<img src="./docs/images/Delete_all.gif" alt="all_clear" width="240"/>](./docs/images/Delete_all.gif)

# Known Issues
- Tap and holding the `⌫` button in mobile devices won't work the same as desktop would do (it prompts to copy the `⌫` character on the button).  
[<img src="./docs/images/AC_button.jpg" alt="tap_and_hold_ac_mobile" width="240"/>](./docs/images/AC_button.jpg)
- For some small numbers with long decimal digits, the display might stay the same for a while when removing the digits one by one. One example to reproduce this behavior, enter some positive digits (preferably repetitive like `99999`) and multiply with small number (like `0.0000001`). Even though the result is displayed as small exponential notation, it has long decimal points.   
[<img src="./docs/images/Delete_small_numbers.gif" alt="delete_small_numbers" width="240"/>](./docs/images/Delete_small_numbers.gif)  