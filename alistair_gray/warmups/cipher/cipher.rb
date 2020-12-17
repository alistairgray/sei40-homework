# # Atbash Cipher
# The Atbash cipher is a simple substitution cipher that relies on transposing all the letters in the alphabet such that the resulting alphabet is backwards. The first letter is replaced with the last letter, the second with the second-last, and so on.
# An Atbash cipher for the Latin alphabet would be as follows:
# ```plain
# Plain:  abcdefghijklmnopqrstuvwxyz
# Cipher: zyxwvutsrqponmlkjihgfedcba
# ```
# It is a very weak cipher because it only has one possible key, and it is a
# simple monoalphabetic substitution cipher. However, this may not have been an issue in the cipher's time.
# In Ruby, write a program which seeks a user's input, and encodes/decodes the input.
# ## Examples
# - Encoding "test" gives "gvhg"
# - Decoding "gvhg" gives "test"

class Atbash

  def initialize(input)
    @word = input.downcase
    @alphabet = ("a".."z").to_a
    @reversed_alphabet = @alphabet.reverse

    input_array = input.split(//)
    letter_positions = input_array.find_index()
    p letter_positions

  end

  def encode
    message =""
    @word.each_char do |letter|
      index = @alphabet.index(letter)
      cipher = @reversed_alphabet[index]
      puts "Letter = #{letter}, Index = #{index}, Reversed letter = #{cipher}."

      message += cipher
    end # word.each_char
    message.to_s
  end # initialize
end # Atbash


cipher = Atbash.new "test"
puts cipher.encode
