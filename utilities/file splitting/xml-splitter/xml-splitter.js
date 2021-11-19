/* This node.js script accepts an input XML file, desired maximum chunk size (in gigabytes), and desired output directory. Given the desired chunk size, it splits the input file into multiple files, each of which is no larger than the desired chunk size. The output files are named according to the input file's name, with a suffix of "_chunk_<n>", where <n> is the chunk number. Furthermore, the output files are placed in the desired output directory.

In addition, there are four more features of this script:
1. Logging: The script outputs a log file, named after the input file, with the suffix "_log.txt". This log file contains information regarding the number of chunks created, the size of each chunk, the total size of the input file, the total size of the output file, the total execution time of the script, and an overall success/failure message.
2. Error handling: If the input file is not found, the script outputs an error message and exits. If the output directory is not found, the script creates it. If the output directory is found, but is not a directory, the script outputs an error message and exits. If the output directory is found, but is not writable, the script outputs an error message and exits.
3. Chunk size: The script accepts a chunk size in gigabytes. If the chunk size is not specified, the default chunk size is 4 gigabytes. Furthermore, the chunk size cannot be less than 0 or greater than the file size.
4. Chunk logic: The script will quickly and efficiently determine the total number of children with root parent (an integer) and quick average data volume per root child. Using this average child data volume, the script will proceed to determine the number of children that will fit into the desired chunk size (with a minimum of 1 child per chunk and a 5% of chunk size buffer). Furthermore the script will allocate each root child to a chunk ensuring that the maximum number of children per chunk is not exceeded, with a remainder being allocated to the next chunk since the last chunk may not be full due to the fact that the number of children allocated per chunk may not equally divide the total number of children.
The script will then proceed to create each chunk and output the chunk data to the output directory. The script will then output a success message and exit.

The output files are named after the input file's name, with a suffix of "_chunk_<n>", where <n> is the chunk number. Furthermore, the output files are placed in the desired output directory.
*/

// Import modules.
