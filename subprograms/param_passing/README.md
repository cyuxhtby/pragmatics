Pass-by-Value: The function receives a copy of the argument. Modifications do not affect the original variable (isolates changes to the local scope of the function)

Pass-by-Reference: The function accesses the argument's memory address, allowing direct modification of the original variable (allows direct modification of the original variable, can affect both local and global operations can effect same var)

Pass-by-Value-Result: A hybrid approach where the function operates on a copy, but the result is copied back to the original variable upon completion. (applies function-local changes to the original variable upon function exit)
