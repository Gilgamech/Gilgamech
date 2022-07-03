PowerGIL is a Powershell module with many neat features. It's the container for my weird ideas and "inbetween-projects", where I can connect 2 ideas from unrelated projects in a new way. It is the hub of my "parallel learning" system. 


Filter-FizzBuzz:

To write it, we use a function called New-FunctionStatement. It's a multi-tool meant to write almost any part of a function. I use the alias "nfs" for brevity.
First, it's common to convert the 15:
PS C:\Dropbox> New-FunctionStatement if -not -FunctionVariable _ -ComparisonOperator Modulus -ReferenceVariable 15 -ScriptBlock 'Return "FizzBuzz"' -ElseScriptBlock 'Return $_'
  if (!($_ % 15)) {
          Return "FizzBuzz"
  } else {
          Return $_
  }; #end if _
It's a bit wordy, but Powershell has tab completion on parameters and entry sets. The function simply replaces the tab-completed text entries with the correct symbols, and adds brackets and formatting automatically. The opportunity for human error to occur is removed.
I'm using the modulus output as a true/false test, which will only be true when "this" has a 15 modulus of 0, aka is a multiple of 15. Then I reverse it, so it's only true when a multiple of 15. Otherwise, return the number.
Next up, nesting the conversion of 5 in to "Fizz". For that, we use something called the ElseIf:
PS C:\Dropbox> New-FunctionStatement if -not -FunctionVariable _ -ComparisonOperator Modulus -ReferenceVariable 15 -ScriptBlock 'Return "FizzBuzz"' -ElseScriptBlock (New-FunctionStatement ElseIf -not -FunctionVariable _ -ComparisonOperator Modulus -ReferenceVariable 5 -ScriptBlock 'Return "Fizz"' -ElseScriptBlock 'Return $_')
  if (!($_ % 15)) {
          Return "FizzBuzz"
  } ElseIf (!($_ % 5)) {
          Return "Fizz"
  } else {
          Return $_
  }; #end if _
It's getting a little long, but we're most of the way there.
Using the same true/false modulus trick, if "this" item in the list doesn't have a modulus of 15, we can next check for a modulus of 5. If so, "this" would return "Fizz". Otherwise, it's important to return the input. If you haven't guessed, we're going to put this in an oft-forgotten Filter function.
The whole cake:
PS C:\Dropbox> New-FunctionStatement if -not -FunctionVariable _ -ComparisonOperator Modulus -ReferenceVariable 15 -Scri ptBlock 'Return "FizzBuzz"' -ElseScriptBlock (New-FunctionStatement ElseIf -not -FunctionVariable _ -ComparisonOperator Modulus -ReferenceVariable 5 -ScriptBlock 'Return "Fizz"' -ElseScriptBlock (New-FunctionStatement ElseIf -not -FunctionV ariable _ -ComparisonOperator Modulus -ReferenceVariable 3 -ScriptBlock 'Return "Buzz"' -ElseScriptBlock 'Return $_'))
  if (!($_ % 15)) {
          Return "FizzBuzz"
  } ElseIf (!($_ % 5)) {
          Return "Fizz"
  } ElseIf (!($_ % 3)) {
          Return "Buzz"
  } else {
          Return $_
  }; #end if _
Here we cover all cases - if the pipeline value, "this", has a modulus 15, "FizzBuzz" is returned. Else, modulus 5 is tested, returning "Fizz" if true. Then 3 is tested, returning "Buzz". Lastly, return the value from the pipeline. This means letters and other non-numeric values will also pass through the filter.
Making some icing:
Here we add in another function, New-Function. This is meant to provide the function wrapper, brackets, formatting, headers, and function symbols. Some of those features are pending. The -Filter switch just changes the front word from "Function" to "Filter":

PS C:\Dropbox> New-Function Filter-FizzBuzz -Filter
  Filter Filter-FizzBuzz {
  
  }; #end Filter-FizzBuzz

Icing on the cake:
Putting it all together gets a little long. Luckily, nesting lets us make this a multi-liner, for clarity:

PS C:\Dropbox> New-Function Filter-FizzBuzz -Filter (
>> New-FunctionStatement if -not -FunctionVariable _ -ComparisonOperator Modulus -ReferenceVariable 15 -ScriptBlock 'Return "FizzBuzz"' -ElseScriptBlock (
>> New-FunctionStatement ElseIf -not -FunctionVariable _ -ComparisonOperator Modulus -ReferenceVariable 5 -ScriptBlock 'Return "Fizz"' -ElseScriptBlock (
>> New-FunctionStatement ElseIf -not -FunctionVariable _ -ComparisonOperator Modulus -ReferenceVariable 3 -ScriptBlock 'Return "Buzz"' -ElseScriptBlock 'Return $_'
>> )
>> )
>> )
>>
    Filter Filter-FizzBuzz {
          if (!($_ % 15)) {
                  Return "FizzBuzz"
          } ElseIf (!($_ % 5)) {
                  Return "Fizz"
          } ElseIf (!($_ % 3)) {
                  Return "Buzz"
          } else {
                  Return $_
          }; #end if _
  }; #end Filter-FizzBuzz


And the output:
  PS C:\Dropbox> 0..20 | Filter-FizzBuzz
  FizzBuzz
  1
  2
  Buzz
  4
  Fizz
  Buzz
  7
  8
  Buzz
  Fizz
  11
  Buzz
  13
  14
  FizzBuzz
  16
  17
  Buzz
  19
  Fizz
