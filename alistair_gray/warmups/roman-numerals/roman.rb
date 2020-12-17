# The Romans wrote numbers using letters - I, V, X, L, C, D, M. (notice these letters have lots of straight lines and are hence easy to hack into stone tablets using a chisel).
# ```
#  1  => I
# 10  => X
#  7  => VII
#  ```
# Write a program that will convert Arabic numerals to Roman numerals.
# There is no need to be able to convert numbers larger than about 3000. (The Romans themselves didn't tend to go any higher)
# Wikipedia says: "Modern Roman numerals ... are written by expressing each digit separately starting with the left most digit and skipping any digit with a value of zero."
# To see this in practice, consider the example of 1990.
# ```
# In Roman numerals 1990 is MCMXC:
# 1000=M 900=CM 90=XC
# 2008 is written as MMVIII:
# 2000=MM 8=VIII

class Roman
    def initialize
        # An instance variable so that we can use it in any method of this class
        @roman_map = {
            1000 => 'M',
             900 => 'CM',
             500 => 'D',
             400 => 'CD',
             100 => 'C',
              90 => 'XC',
              50 => 'L',
              40 => 'XL',
              10 => 'X',
               9 => 'IX',
               5 => 'V',
               4 => 'IV',
               1 => 'I'
          }
    end
    @phrase = ''
    def to_roman( number )
      @roman_map.sort.reverse.each do |key, value|
        num_int = number.to_i
        key_int = key.to_i
        if key_int >= num_int
          then
          num_int - key_int
          @phrase =+ value
          puts @phrase
        else
        end # conditional
      end # each
        # create a variable to store the result
        # loop through @roman_map??? compare to number??
    end # to_roman end
    print @phrase
end # class end
roman = Roman.new
puts roman.to_roman( 1990 )
