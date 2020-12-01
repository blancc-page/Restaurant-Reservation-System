{\rtf1\ansi\ansicpg1252\cocoartf2513
\cocoatextscaling0\cocoaplatform0{\fonttbl\f0\fnil\fcharset0 Menlo-Regular;\f1\fnil\fcharset0 Menlo-Italic;}
{\colortbl;\red255\green255\blue255;\red81\green100\blue100;\red2\green17\blue29;\red205\green214\blue230;
\red185\green122\blue229;\red112\green150\blue255;\red209\green244\blue213;\red206\green210\blue217;\red111\green213\blue190;
\red230\green184\blue123;\red173\green231\blue219;\red252\green61\blue97;\red249\green243\blue142;\red76\green149\blue221;
\red243\green119\blue89;\red77\green106\blue133;\red186\green225\blue101;\red254\green192\blue121;\red198\green44\blue48;
}
{\*\expandedcolortbl;;\cssrgb\c38824\c46667\c46667;\cssrgb\c392\c8627\c15294;\cssrgb\c83922\c87059\c92157;
\cssrgb\c78039\c57255\c91765;\cssrgb\c50980\c66667\c100000;\cssrgb\c85098\c96078\c86667;\cssrgb\c84314\c85882\c87843;\cssrgb\c49804\c85882\c79216;
\cssrgb\c92549\c76863\c55294;\cssrgb\c72941\c92157\c88627;\cssrgb\c100000\c34510\c45490;\cssrgb\c98039\c95294\c62353;\cssrgb\c36078\c65490\c89412;
\cssrgb\c96863\c54902\c42353;\cssrgb\c37255\c49412\c59216;\cssrgb\c77255\c89412\c47059;\cssrgb\c100000\c79608\c54510;\cssrgb\c82745\c25882\c24314;
}
\paperw11900\paperh16840\margl1440\margr1440\vieww10800\viewh8400\viewkind0
\deftab720
\pard\pardeftab720\sl360\partightenfactor0

\f0\fs24 \cf2 \cb3 \expnd0\expndtw0\kerning0
\outl0\strokewidth0 \strokec2 //
\f1\i  xxxxxxxxxx Working For Sign Up Form xxxxxxxxxx
\f0\i0 \cf4 \cb1 \strokec4 \
\cf2 \cb3 \strokec2 //
\f1\i  xxxxxxxxxx Full Name Validation xxxxxxxxxx
\f0\i0 \cf4 \cb1 \strokec4 \
\pard\pardeftab720\sl360\partightenfactor0
\cf5 \cb3 \strokec5 function\cf4 \strokec4  
\f1\i \cf6 \strokec6 checkUserFullName
\f0\i0 \cf7 \strokec7 ()\cf4 \strokec4  \{\cb1 \
\pard\pardeftab720\sl360\partightenfactor0
\cf4 \cb3   \cf5 \strokec5 let
\f1\i  
\f0\i0 \cf8 \strokec8 userFullName
\f1\i \cf5 \strokec5  
\f0\i0 =
\f1\i  \cf9 \strokec9 document\cf5 \strokec5 .\cf6 \strokec6 getElementById
\f0\i0 \cf4 \strokec4 (\cf7 \strokec7 "\cf10 \strokec10 userFullName\cf7 \strokec7 "\cf4 \strokec4 )
\f1\i \cf5 \strokec5 .\cf11 \strokec11 value
\f0\i0 \cf4 \strokec4 ;\cb1 \
\cb3   \cf5 \strokec5 let
\f1\i  
\f0\i0 \cf8 \strokec8 flag
\f1\i \cf5 \strokec5  
\f0\i0 =
\f1\i  \cf12 \strokec12 false
\f0\i0 \cf4 \strokec4 ;\cb1 \
\cb3   \cf5 \strokec5 if\cf4 \strokec4  (\cf8 \strokec8 userFullName\cf4 \strokec4  \cf5 \strokec5 ===\cf4 \strokec4  \cf7 \strokec7 ""\cf4 \strokec4 ) \{\cb1 \
\cb3     \cf8 \strokec8 flag\cf4 \strokec4  \cf5 \strokec5 =\cf4 \strokec4  \cf12 \strokec12 true\cf4 \strokec4 ;\cb1 \
\cb3   \}\cb1 \
\cb3   \cf5 \strokec5 if\cf4 \strokec4  (\cf8 \strokec8 flag\cf4 \strokec4 ) \{\cb1 \
\cb3     
\f1\i \cf9 \strokec9 document\cf5 \strokec5 .\cf6 \strokec6 getElementById
\f0\i0 \cf4 \strokec4 (\cf7 \strokec7 "\cf10 \strokec10 userFullNameError\cf7 \strokec7 "\cf4 \strokec4 )
\f1\i \cf5 \strokec5 .\cf13 \strokec13 style\cf5 \strokec5 .
\f0\i0 \cf11 \strokec11 display\cf4 \strokec4  \cf5 \strokec5 =\cf4 \strokec4  \cf7 \strokec7 "\cf10 \strokec10 block\cf7 \strokec7 "\cf4 \strokec4 ;\cb1 \
\cb3   \} \cf5 \strokec5 else\cf4 \strokec4  \{\cb1 \
\cb3     
\f1\i \cf9 \strokec9 document\cf5 \strokec5 .\cf6 \strokec6 getElementById
\f0\i0 \cf4 \strokec4 (\cf7 \strokec7 "\cf10 \strokec10 userFullNameError\cf7 \strokec7 "\cf4 \strokec4 )
\f1\i \cf5 \strokec5 .\cf13 \strokec13 style\cf5 \strokec5 .
\f0\i0 \cf11 \strokec11 display\cf4 \strokec4  \cf5 \strokec5 =\cf4 \strokec4  \cf7 \strokec7 "\cf10 \strokec10 none\cf7 \strokec7 "\cf4 \strokec4 ;\cb1 \
\cb3   \}\cb1 \
\cb3 \}\cb1 \
\pard\pardeftab720\sl360\partightenfactor0
\cf2 \cb3 \strokec2 //
\f1\i  xxxxxxxxxx Phone Number Validation xxxxxxxxxx
\f0\i0 \cf4 \cb1 \strokec4 \
\pard\pardeftab720\sl360\partightenfactor0
\cf5 \cb3 \strokec5 function\cf4 \strokec4  
\f1\i \cf6 \strokec6 checkUserPhoneNumber
\f0\i0 \cf7 \strokec7 ()\cf4 \strokec4  \{\cb1 \
\pard\pardeftab720\sl360\partightenfactor0
\cf4 \cb3   \cf5 \strokec5 let
\f1\i  
\f0\i0 \cf8 \strokec8 userPhoneNumber
\f1\i \cf5 \strokec5  
\f0\i0 =
\f1\i  \cf9 \strokec9 document\cf5 \strokec5 .\cf6 \strokec6 getElementById
\f0\i0 \cf4 \strokec4 (\cf7 \strokec7 "\cf10 \strokec10 userPhoneNumber\cf7 \strokec7 "\cf4 \strokec4 )
\f1\i \cf5 \strokec5 .\cf11 \strokec11 value
\f0\i0 \cf4 \strokec4 ;\cb1 \
\cb3   \cf5 \strokec5 let
\f1\i  
\f0\i0 \cf8 \strokec8 flag
\f1\i \cf5 \strokec5  
\f0\i0 =
\f1\i  \cf12 \strokec12 false
\f0\i0 \cf4 \strokec4 ;\cb1 \
\cb3   \cf5 \strokec5 if\cf4 \strokec4  (\cf8 \strokec8 userPhoneNumber\cf4 \strokec4  \cf5 \strokec5 ===\cf4 \strokec4  \cf7 \strokec7 ""\cf4 \strokec4 ) \{\cb1 \
\cb3     \cf8 \strokec8 flag\cf4 \strokec4  \cf5 \strokec5 =\cf4 \strokec4  \cf12 \strokec12 true\cf4 \strokec4 ;\cb1 \
\cb3   \}\cb1 \
\cb3   \cf5 \strokec5 if\cf4 \strokec4  (\cf8 \strokec8 flag\cf4 \strokec4 ) \{\cb1 \
\cb3     
\f1\i \cf9 \strokec9 document\cf5 \strokec5 .\cf6 \strokec6 getElementById
\f0\i0 \cf4 \strokec4 (\cf7 \strokec7 "\cf10 \strokec10 userPhoneNumberError\cf7 \strokec7 "\cf4 \strokec4 )
\f1\i \cf5 \strokec5 .\cf13 \strokec13 style\cf5 \strokec5 .
\f0\i0 \cf11 \strokec11 display\cf4 \strokec4  \cf5 \strokec5 =\cf4 \strokec4  \cf7 \strokec7 "\cf10 \strokec10 block\cf7 \strokec7 "\cf4 \strokec4 ;\cb1 \
\cb3   \} \cf5 \strokec5 else\cf4 \strokec4  \{\cb1 \
\cb3     
\f1\i \cf9 \strokec9 document\cf5 \strokec5 .\cf6 \strokec6 getElementById
\f0\i0 \cf4 \strokec4 (\cf7 \strokec7 "\cf10 \strokec10 userPhoneNumberError\cf7 \strokec7 "\cf4 \strokec4 )
\f1\i \cf5 \strokec5 .\cf13 \strokec13 style\cf5 \strokec5 .
\f0\i0 \cf11 \strokec11 display\cf4 \strokec4  \cf5 \strokec5 =\cf4 \strokec4  \cf7 \strokec7 "\cf10 \strokec10 none\cf7 \strokec7 "\cf4 \strokec4 ;\cb1 \
\cb3   \}\cb1 \
\cb3 \}\cb1 \
\pard\pardeftab720\sl360\partightenfactor0
\cf2 \cb3 \strokec2 //
\f1\i  xxxxxxxxxx Email Validation xxxxxxxxxx
\f0\i0 \cf4 \cb1 \strokec4 \
\pard\pardeftab720\sl360\partightenfactor0
\cf5 \cb3 \strokec5 function\cf4 \strokec4  
\f1\i \cf6 \strokec6 checkUserEmail
\f0\i0 \cf7 \strokec7 ()\cf4 \strokec4  \{\cb1 \
\pard\pardeftab720\sl360\partightenfactor0
\cf4 \cb3   \cf5 \strokec5 let
\f1\i  
\f0\i0 \cf8 \strokec8 userEmail
\f1\i \cf5 \strokec5  
\f0\i0 =
\f1\i  \cf9 \strokec9 document\cf5 \strokec5 .\cf6 \strokec6 getElementById
\f0\i0 \cf4 \strokec4 (\cf7 \strokec7 "\cf10 \strokec10 userEmail\cf7 \strokec7 "\cf4 \strokec4 );\cb1 \
\cb3   \cf5 \strokec5 let
\f1\i  
\f0\i0 \cf8 \strokec8 userEmailFormate
\f1\i \cf5 \strokec5  
\f0\i0 =
\f1\i  
\f0\i0 \cf7 \strokec7 /
\f1\i \cf5 \strokec5 ^
\f0\i0 \cf14 \strokec14 ((\cf6 \strokec6 [\cf9 \strokec9 ^
\f1\i \cf6 \strokec6 <>()\cf15 \strokec15 \\[\\]\\\\\cf6 \strokec6 .,;:\\s@"
\f0\i0 ]\cf9 \strokec9 +\cf14 \strokec14 (
\f1\i \cf15 \strokec15 \\.
\f0\i0 \cf6 \strokec6 [\cf9 \strokec9 ^
\f1\i \cf6 \strokec6 <>()\cf15 \strokec15 \\[\\]\\\\\cf6 \strokec6 .,;:\\s@"
\f0\i0 ]\cf9 \strokec9 +\cf14 \strokec14 )\cf9 \strokec9 *\cf14 \strokec14 )\cf9 \strokec9 |\cf14 \strokec14 (
\f1\i "\cf6 \strokec6 .
\f0\i0 \cf9 \strokec9 +
\f1\i \cf14 \strokec14 "
\f0\i0 ))
\f1\i @
\f0\i0 ((
\f1\i \cf15 \strokec15 \\[
\f0\i0 \cf6 \strokec6 [
\f1\i 0-9
\f0\i0 ]\cf9 \strokec9 \{1,3\}
\f1\i \cf15 \strokec15 \\.
\f0\i0 \cf6 \strokec6 [
\f1\i 0-9
\f0\i0 ]\cf9 \strokec9 \{1,3\}
\f1\i \cf15 \strokec15 \\.
\f0\i0 \cf6 \strokec6 [
\f1\i 0-9
\f0\i0 ]\cf9 \strokec9 \{1,3\}
\f1\i \cf15 \strokec15 \\.
\f0\i0 \cf6 \strokec6 [
\f1\i 0-9
\f0\i0 ]\cf9 \strokec9 \{1,3\}
\f1\i \cf15 \strokec15 \\]
\f0\i0 \cf14 \strokec14 )\cf9 \strokec9 |\cf14 \strokec14 ((\cf6 \strokec6 [
\f1\i a-zA-Z\\-0-9
\f0\i0 ]\cf9 \strokec9 +
\f1\i \cf15 \strokec15 \\.
\f0\i0 \cf14 \strokec14 )\cf9 \strokec9 +\cf6 \strokec6 [
\f1\i a-zA-Z
\f0\i0 ]\cf9 \strokec9 \{2,\}\cf14 \strokec14 ))
\f1\i \cf5 \strokec5 $
\f0\i0 \cf7 \strokec7 /\cf4 \strokec4 ;\cb1 \
\cb3   \cf5 \strokec5 let
\f1\i  
\f0\i0 \cf8 \strokec8 flag\cf4 \strokec4 ;\cb1 \
\cb3   \cf5 \strokec5 if\cf4 \strokec4  (
\f1\i \cf9 \strokec9 userEmail\cf5 \strokec5 .\cf13 \strokec13 value\cf5 \strokec5 .\cf6 \strokec6 match
\f0\i0 \cf4 \strokec4 (\cf8 \strokec8 userEmailFormate\cf4 \strokec4 )) \{\cb1 \
\cb3     \cf8 \strokec8 flag\cf4 \strokec4  \cf5 \strokec5 =\cf4 \strokec4  \cf12 \strokec12 false\cf4 \strokec4 ;\cb1 \
\cb3   \} \cf5 \strokec5 else\cf4 \strokec4  \{\cb1 \
\cb3     \cf8 \strokec8 flag\cf4 \strokec4  \cf5 \strokec5 =\cf4 \strokec4  \cf12 \strokec12 true\cf4 \strokec4 ;\cb1 \
\cb3   \}\cb1 \
\cb3   \cf5 \strokec5 if\cf4 \strokec4  (\cf8 \strokec8 flag\cf4 \strokec4 ) \{\cb1 \
\cb3     
\f1\i \cf9 \strokec9 document\cf5 \strokec5 .\cf6 \strokec6 getElementById
\f0\i0 \cf4 \strokec4 (\cf7 \strokec7 "\cf10 \strokec10 userEmailError\cf7 \strokec7 "\cf4 \strokec4 )
\f1\i \cf5 \strokec5 .\cf13 \strokec13 style\cf5 \strokec5 .
\f0\i0 \cf11 \strokec11 display\cf4 \strokec4  \cf5 \strokec5 =\cf4 \strokec4  \cf7 \strokec7 "\cf10 \strokec10 block\cf7 \strokec7 "\cf4 \strokec4 ;\cb1 \
\cb3   \} \cf5 \strokec5 else\cf4 \strokec4  \{\cb1 \
\cb3     
\f1\i \cf9 \strokec9 document\cf5 \strokec5 .\cf6 \strokec6 getElementById
\f0\i0 \cf4 \strokec4 (\cf7 \strokec7 "\cf10 \strokec10 userEmailError\cf7 \strokec7 "\cf4 \strokec4 )
\f1\i \cf5 \strokec5 .\cf13 \strokec13 style\cf5 \strokec5 .
\f0\i0 \cf11 \strokec11 display\cf4 \strokec4  \cf5 \strokec5 =\cf4 \strokec4  \cf7 \strokec7 "\cf10 \strokec10 none\cf7 \strokec7 "\cf4 \strokec4 ;\cb1 \
\cb3   \}\cb1 \
\cb3 \}\cb1 \
\pard\pardeftab720\sl360\partightenfactor0
\cf2 \cb3 \strokec2 //
\f1\i  xxxxxxxxxx Password Validation xxxxxxxxxx
\f0\i0 \cf4 \cb1 \strokec4 \
\pard\pardeftab720\sl360\partightenfactor0
\cf5 \cb3 \strokec5 function\cf4 \strokec4  
\f1\i \cf6 \strokec6 checkUserPassword
\f0\i0 \cf7 \strokec7 ()\cf4 \strokec4  \{\cb1 \
\pard\pardeftab720\sl360\partightenfactor0
\cf4 \cb3   \cf5 \strokec5 let
\f1\i  
\f0\i0 \cf8 \strokec8 userPassword
\f1\i \cf5 \strokec5  
\f0\i0 =
\f1\i  \cf9 \strokec9 document\cf5 \strokec5 .\cf6 \strokec6 getElementById
\f0\i0 \cf4 \strokec4 (\cf7 \strokec7 "\cf10 \strokec10 userPassword\cf7 \strokec7 "\cf4 \strokec4 );\cb1 \
\cb3   \cf5 \strokec5 let
\f1\i  
\f0\i0 \cf8 \strokec8 userPasswordFormate
\f1\i \cf5 \strokec5  
\f0\i0 =
\f1\i \cf14 \strokec14  
\f0\i0 \cf7 \strokec7 /\cf14 \strokec14 (?=
\f1\i \cf6 \strokec6 .
\f0\i0 \cf9 \strokec9 *
\f1\i \cf6 \strokec6 \\d
\f0\i0 \cf14 \strokec14 )(?=
\f1\i \cf6 \strokec6 .
\f0\i0 \cf9 \strokec9 *\cf6 \strokec6 [
\f1\i a-z
\f0\i0 ]\cf14 \strokec14 )(?=
\f1\i \cf6 \strokec6 .
\f0\i0 \cf9 \strokec9 *\cf6 \strokec6 [
\f1\i A-Z
\f0\i0 ]\cf14 \strokec14 )
\f1\i \cf6 \strokec6 .
\f0\i0 \cf9 \strokec9 \{10,\}\cf7 \strokec7 /\cf4 \strokec4 ;\cb1 \
\cb3   \cf5 \strokec5 let
\f1\i  
\f0\i0 \cf8 \strokec8 flag\cf4 \strokec4 ;\cb1 \
\cb3   \cf5 \strokec5 if\cf4 \strokec4  (
\f1\i \cf9 \strokec9 userPassword\cf5 \strokec5 .\cf13 \strokec13 value\cf5 \strokec5 .\cf6 \strokec6 match
\f0\i0 \cf4 \strokec4 (\cf8 \strokec8 userPasswordFormate\cf4 \strokec4 )) \{\cb1 \
\cb3     \cf8 \strokec8 flag\cf4 \strokec4  \cf5 \strokec5 =\cf4 \strokec4  \cf12 \strokec12 false\cf4 \strokec4 ;\cb1 \
\cb3   \} \cf5 \strokec5 else\cf4 \strokec4  \{\cb1 \
\cb3     \cf8 \strokec8 flag\cf4 \strokec4  \cf5 \strokec5 =\cf4 \strokec4  \cf12 \strokec12 true\cf4 \strokec4 ;\cb1 \
\cb3   \}\cb1 \
\cb3   \cf5 \strokec5 if\cf4 \strokec4  (\cf8 \strokec8 flag\cf4 \strokec4 ) \{\cb1 \
\cb3     
\f1\i \cf9 \strokec9 document\cf5 \strokec5 .\cf6 \strokec6 getElementById
\f0\i0 \cf4 \strokec4 (\cf7 \strokec7 "\cf10 \strokec10 userPasswordError\cf7 \strokec7 "\cf4 \strokec4 )
\f1\i \cf5 \strokec5 .\cf13 \strokec13 style\cf5 \strokec5 .
\f0\i0 \cf11 \strokec11 display\cf4 \strokec4  \cf5 \strokec5 =\cf4 \strokec4  \cf7 \strokec7 "\cf10 \strokec10 block\cf7 \strokec7 "\cf4 \strokec4 ;\cb1 \
\cb3   \} \cf5 \strokec5 else\cf4 \strokec4  \{\cb1 \
\cb3     
\f1\i \cf9 \strokec9 document\cf5 \strokec5 .\cf6 \strokec6 getElementById
\f0\i0 \cf4 \strokec4 (\cf7 \strokec7 "\cf10 \strokec10 userPasswordError\cf7 \strokec7 "\cf4 \strokec4 )
\f1\i \cf5 \strokec5 .\cf13 \strokec13 style\cf5 \strokec5 .
\f0\i0 \cf11 \strokec11 display\cf4 \strokec4  \cf5 \strokec5 =\cf4 \strokec4  \cf7 \strokec7 "\cf10 \strokec10 none\cf7 \strokec7 "\cf4 \strokec4 ;\cb1 \
\cb3   \}\cb1 \
\cb3 \}\cb1 \
\pard\pardeftab720\sl360\partightenfactor0
\cf2 \cb3 \strokec2 //
\f1\i  xxxxxxxxxx Check user bio characters. It'll use later xxxxxxxxxx
\f0\i0 \cf4 \cb1 \strokec4 \
\pard\pardeftab720\sl360\partightenfactor0
\cf5 \cb3 \strokec5 function\cf4 \strokec4  
\f1\i \cf6 \strokec6 checkUserBio
\f0\i0 \cf7 \strokec7 ()\cf4 \strokec4  \{\cb1 \
\pard\pardeftab720\sl360\partightenfactor0
\cf4 \cb3   \cf5 \strokec5 let
\f1\i  
\f0\i0 \cf8 \strokec8 userBio
\f1\i \cf5 \strokec5  
\f0\i0 =
\f1\i  \cf9 \strokec9 document\cf5 \strokec5 .\cf6 \strokec6 getElementById
\f0\i0 \cf4 \strokec4 (\cf7 \strokec7 "\cf10 \strokec10 userBio\cf7 \strokec7 "\cf4 \strokec4 )
\f1\i \cf5 \strokec5 .\cf11 \strokec11 value
\f0\i0 \cf4 \strokec4 ;\cb1 \
\cb3   \cf5 \strokec5 let
\f1\i  
\f0\i0 \cf8 \strokec8 flag
\f1\i \cf5 \strokec5  
\f0\i0 =
\f1\i  \cf12 \strokec12 false
\f0\i0 \cf4 \strokec4 ;\cb1 \
\cb3   \cf5 \strokec5 if\cf4 \strokec4  (\cf8 \strokec8 flag\cf4 \strokec4 ) \{\cb1 \
\cb3     
\f1\i \cf9 \strokec9 document\cf5 \strokec5 .\cf6 \strokec6 getElementById
\f0\i0 \cf4 \strokec4 (\cf7 \strokec7 "\cf10 \strokec10 userBioError\cf7 \strokec7 "\cf4 \strokec4 )
\f1\i \cf5 \strokec5 .\cf13 \strokec13 style\cf5 \strokec5 .
\f0\i0 \cf11 \strokec11 display\cf4 \strokec4  \cf5 \strokec5 =\cf4 \strokec4  \cf7 \strokec7 "\cf10 \strokec10 block\cf7 \strokec7 "\cf4 \strokec4 ;\cb1 \
\cb3   \} \cf5 \strokec5 else\cf4 \strokec4  \{\cb1 \
\cb3     
\f1\i \cf9 \strokec9 document\cf5 \strokec5 .\cf6 \strokec6 getElementById
\f0\i0 \cf4 \strokec4 (\cf7 \strokec7 "\cf10 \strokec10 userBioError\cf7 \strokec7 "\cf4 \strokec4 )
\f1\i \cf5 \strokec5 .\cf13 \strokec13 style\cf5 \strokec5 .
\f0\i0 \cf11 \strokec11 display\cf4 \strokec4  \cf5 \strokec5 =\cf4 \strokec4  \cf7 \strokec7 "\cf10 \strokec10 none\cf7 \strokec7 "\cf4 \strokec4 ;\cb1 \
\cb3   \}\cb1 \
\cb3 \}\cb1 \
\pard\pardeftab720\sl360\partightenfactor0
\cf2 \cb3 \strokec2 //
\f1\i  xxxxxxxxxx Submitting and Creating new user in firebase authentication xxxxxxxxxx
\f0\i0 \cf4 \cb1 \strokec4 \
\pard\pardeftab720\sl360\partightenfactor0
\cf5 \cb3 \strokec5 function\cf4 \strokec4  
\f1\i \cf6 \strokec6 signUp
\f0\i0 \cf7 \strokec7 ()\cf4 \strokec4  \{\cb1 \
\pard\pardeftab720\sl360\partightenfactor0
\cf4 \cb3   \cf5 \strokec5 let
\f1\i  
\f0\i0 \cf8 \strokec8 userFullName
\f1\i \cf5 \strokec5  
\f0\i0 =
\f1\i  \cf9 \strokec9 document\cf5 \strokec5 .\cf6 \strokec6 getElementById
\f0\i0 \cf4 \strokec4 (\cf7 \strokec7 "\cf10 \strokec10 userFullName\cf7 \strokec7 "\cf4 \strokec4 )
\f1\i \cf5 \strokec5 .\cf11 \strokec11 value
\f0\i0 \cf4 \strokec4 ;\cb1 \
\cb3   \cf5 \strokec5 let
\f1\i  
\f0\i0 \cf8 \strokec8 userPhoneNumber
\f1\i \cf5 \strokec5  
\f0\i0 =
\f1\i  \cf9 \strokec9 document\cf5 \strokec5 .\cf6 \strokec6 getElementById
\f0\i0 \cf4 \strokec4 (\cf7 \strokec7 "\cf10 \strokec10 userPhoneNumber\cf7 \strokec7 "\cf4 \strokec4 )
\f1\i \cf5 \strokec5 .\cf11 \strokec11 value
\f0\i0 \cf4 \strokec4 ;\cb1 \
\cb3   \cf5 \strokec5 let
\f1\i  
\f0\i0 \cf8 \strokec8 userEmail
\f1\i \cf5 \strokec5  
\f0\i0 =
\f1\i  \cf9 \strokec9 document\cf5 \strokec5 .\cf6 \strokec6 getElementById
\f0\i0 \cf4 \strokec4 (\cf7 \strokec7 "\cf10 \strokec10 userEmail\cf7 \strokec7 "\cf4 \strokec4 )
\f1\i \cf5 \strokec5 .\cf11 \strokec11 value
\f0\i0 \cf4 \strokec4 ;\cb1 \
\cb3   \cf5 \strokec5 let
\f1\i  
\f0\i0 \cf8 \strokec8 userPassword
\f1\i \cf5 \strokec5  
\f0\i0 =
\f1\i  \cf9 \strokec9 document\cf5 \strokec5 .\cf6 \strokec6 getElementById
\f0\i0 \cf4 \strokec4 (\cf7 \strokec7 "\cf10 \strokec10 userPassword\cf7 \strokec7 "\cf4 \strokec4 )
\f1\i \cf5 \strokec5 .\cf11 \strokec11 value
\f0\i0 \cf4 \strokec4 ;\cb1 \
\cb3   \cf5 \strokec5 let
\f1\i  
\f0\i0 \cf8 \strokec8 userFullNameFormate
\f1\i \cf5 \strokec5  
\f0\i0 =
\f1\i \cf14 \strokec14  
\f0\i0 \cf7 \strokec7 /
\f1\i \cf5 \strokec5 ^
\f0\i0 \cf14 \strokec14 (\cf6 \strokec6 [
\f1\i A-Za-z.\\s_-
\f0\i0 ]\cf14 \strokec14 )\cf7 \strokec7 /\cf4 \strokec4 ;\cb1 \
\cb3   \cf5 \strokec5 let
\f1\i  
\f0\i0 \cf8 \strokec8 userPhoneNumberFormate
\f1\i \cf5 \strokec5  
\f0\i0 =
\f1\i \cf14 \strokec14  
\f0\i0 \cf7 \strokec7 /
\f1\i \cf5 \strokec5 ^
\f0\i0 \cf14 \strokec14 (\cf6 \strokec6 [
\f1\i 0-9
\f0\i0 ]\cf14 \strokec14 )\cf7 \strokec7 /\cf4 \strokec4 ;\cb1 \
\cb3   \cf5 \strokec5 let
\f1\i  
\f0\i0 \cf8 \strokec8 userEmailFormate
\f1\i \cf5 \strokec5  
\f0\i0 =
\f1\i  
\f0\i0 \cf7 \strokec7 /
\f1\i \cf5 \strokec5 ^
\f0\i0 \cf14 \strokec14 ((\cf6 \strokec6 [\cf9 \strokec9 ^
\f1\i \cf6 \strokec6 <>()\cf15 \strokec15 \\[\\]\\\\\cf6 \strokec6 .,;:\\s@"
\f0\i0 ]\cf9 \strokec9 +\cf14 \strokec14 (
\f1\i \cf15 \strokec15 \\.
\f0\i0 \cf6 \strokec6 [\cf9 \strokec9 ^
\f1\i \cf6 \strokec6 <>()\cf15 \strokec15 \\[\\]\\\\\cf6 \strokec6 .,;:\\s@"
\f0\i0 ]\cf9 \strokec9 +\cf14 \strokec14 )\cf9 \strokec9 *\cf14 \strokec14 )\cf9 \strokec9 |\cf14 \strokec14 (
\f1\i "\cf6 \strokec6 .
\f0\i0 \cf9 \strokec9 +
\f1\i \cf14 \strokec14 "
\f0\i0 ))
\f1\i @
\f0\i0 ((
\f1\i \cf15 \strokec15 \\[
\f0\i0 \cf6 \strokec6 [
\f1\i 0-9
\f0\i0 ]\cf9 \strokec9 \{1,3\}
\f1\i \cf15 \strokec15 \\.
\f0\i0 \cf6 \strokec6 [
\f1\i 0-9
\f0\i0 ]\cf9 \strokec9 \{1,3\}
\f1\i \cf15 \strokec15 \\.
\f0\i0 \cf6 \strokec6 [
\f1\i 0-9
\f0\i0 ]\cf9 \strokec9 \{1,3\}
\f1\i \cf15 \strokec15 \\.
\f0\i0 \cf6 \strokec6 [
\f1\i 0-9
\f0\i0 ]\cf9 \strokec9 \{1,3\}
\f1\i \cf15 \strokec15 \\]
\f0\i0 \cf14 \strokec14 )\cf9 \strokec9 |\cf14 \strokec14 ((\cf6 \strokec6 [
\f1\i a-zA-Z\\-0-9
\f0\i0 ]\cf9 \strokec9 +
\f1\i \cf15 \strokec15 \\.
\f0\i0 \cf14 \strokec14 )\cf9 \strokec9 +\cf6 \strokec6 [
\f1\i a-zA-Z
\f0\i0 ]\cf9 \strokec9 \{2,\}\cf14 \strokec14 ))
\f1\i \cf5 \strokec5 $
\f0\i0 \cf7 \strokec7 /\cf4 \strokec4 ;\cb1 \
\cb3   \cf5 \strokec5 let
\f1\i  
\f0\i0 \cf8 \strokec8 userPasswordFormate
\f1\i \cf5 \strokec5  
\f0\i0 =
\f1\i \cf14 \strokec14  
\f0\i0 \cf7 \strokec7 /\cf14 \strokec14 (?=
\f1\i \cf6 \strokec6 .
\f0\i0 \cf9 \strokec9 *
\f1\i \cf6 \strokec6 \\d
\f0\i0 \cf14 \strokec14 )(?=
\f1\i \cf6 \strokec6 .
\f0\i0 \cf9 \strokec9 *\cf6 \strokec6 [
\f1\i a-z
\f0\i0 ]\cf14 \strokec14 )(?=
\f1\i \cf6 \strokec6 .
\f0\i0 \cf9 \strokec9 *\cf6 \strokec6 [
\f1\i A-Z
\f0\i0 ]\cf14 \strokec14 )
\f1\i \cf6 \strokec6 .
\f0\i0 \cf9 \strokec9 \{10,\}\cf7 \strokec7 /\cf4 \strokec4 ;\cb1 \
\
\cb3   \cf5 \strokec5 let
\f1\i  
\f0\i0 \cf8 \strokec8 checkUserFullNameValid
\f1\i \cf5 \strokec5  
\f0\i0 =
\f1\i  \cf9 \strokec9 userFullName\cf5 \strokec5 .\cf6 \strokec6 match
\f0\i0 \cf4 \strokec4 (\cf8 \strokec8 userFullNameFormate\cf4 \strokec4 );\cb1 \
\cb3   \cf5 \strokec5 let
\f1\i  
\f0\i0 \cf8 \strokec8 userPhoneNumberValid
\f1\i \cf5 \strokec5  
\f0\i0 =
\f1\i  \cf9 \strokec9 userPhoneNumber\cf5 \strokec5 .\cf6 \strokec6 match
\f0\i0 \cf4 \strokec4 (\cf8 \strokec8 userPhoneNumberFormate\cf4 \strokec4 );\cb1 \
\cb3   \cf5 \strokec5 let
\f1\i  
\f0\i0 \cf8 \strokec8 checkUserEmailValid
\f1\i \cf5 \strokec5  
\f0\i0 =
\f1\i  \cf9 \strokec9 userEmail\cf5 \strokec5 .\cf6 \strokec6 match
\f0\i0 \cf4 \strokec4 (\cf8 \strokec8 userEmailFormate\cf4 \strokec4 );\cb1 \
\cb3   \cf5 \strokec5 let
\f1\i  
\f0\i0 \cf8 \strokec8 checkUserPasswordValid
\f1\i \cf5 \strokec5  
\f0\i0 =
\f1\i  \cf9 \strokec9 userPassword\cf5 \strokec5 .\cf6 \strokec6 match
\f0\i0 \cf4 \strokec4 (\cf8 \strokec8 userPasswordFormate\cf4 \strokec4 );\cb1 \
\
\cb3   \cf5 \strokec5 if\cf4 \strokec4  (\cf8 \strokec8 checkUserFullNameValid\cf4 \strokec4  \cf5 \strokec5 ==\cf4 \strokec4  \cf12 \strokec12 null\cf4 \strokec4 ) \{\cb1 \
\cb3     
\f1\i \cf5 \strokec5 return
\f0\i0 \cf4 \strokec4  
\f1\i \cf6 \strokec6 checkUserFullName
\f0\i0 \cf4 \strokec4 ();\cb1 \
\cb3   \} \cf5 \strokec5 else\cf4 \strokec4  \cf5 \strokec5 if\cf4 \strokec4  (\cf8 \strokec8 userPhoneNumberValid\cf4 \strokec4  \cf5 \strokec5 ===\cf4 \strokec4  \cf12 \strokec12 null\cf4 \strokec4 ) \{\cb1 \
\cb3     
\f1\i \cf5 \strokec5 return
\f0\i0 \cf4 \strokec4  
\f1\i \cf6 \strokec6 checkUserPhoneNumber
\f0\i0 \cf4 \strokec4 ();\cb1 \
\cb3   \} \cf5 \strokec5 else\cf4 \strokec4  \cf5 \strokec5 if\cf4 \strokec4  (\cf8 \strokec8 checkUserEmailValid\cf4 \strokec4  \cf5 \strokec5 ==\cf4 \strokec4  \cf12 \strokec12 null\cf4 \strokec4 ) \{\cb1 \
\cb3     
\f1\i \cf5 \strokec5 return
\f0\i0 \cf4 \strokec4  
\f1\i \cf6 \strokec6 checkUserEmail
\f0\i0 \cf4 \strokec4 ();\cb1 \
\cb3   \} \cf5 \strokec5 else\cf4 \strokec4  \cf5 \strokec5 if\cf4 \strokec4  (\cf8 \strokec8 checkUserPasswordValid\cf4 \strokec4  \cf5 \strokec5 ==\cf4 \strokec4  \cf12 \strokec12 null\cf4 \strokec4 ) \{\cb1 \
\cb3     
\f1\i \cf5 \strokec5 return
\f0\i0 \cf4 \strokec4  
\f1\i \cf6 \strokec6 checkUserPassword
\f0\i0 \cf4 \strokec4 ();\cb1 \
\cb3   \} \cf5 \strokec5 else\cf4 \strokec4  \{\cb1 \
\cb3     \cf8 \strokec8 firebase\cf4 \cb1 \strokec4 \
\cb3       
\f1\i \cf5 \strokec5 .\cf6 \strokec6 auth
\f0\i0 \cf4 \strokec4 ()\cb1 \
\cb3       
\f1\i \cf5 \strokec5 .\cf6 \strokec6 createUserWithEmailAndPassword
\f0\i0 \cf4 \strokec4 (\cf8 \strokec8 userEmail\cf16 \strokec16 ,\cf4 \strokec4  \cf8 \strokec8 userPassword\cf4 \strokec4 )\cb1 \
\cb3       
\f1\i \cf5 \strokec5 .\cf6 \strokec6 then
\f0\i0 \cf4 \strokec4 (\cf7 \strokec7 (\cf8 \strokec8 success\cf7 \strokec7 )\cf4 \strokec4  \cf5 \strokec5 =>\cf4 \strokec4  \{\cb1 \
\cb3         \cf5 \strokec5 let
\f1\i  
\f0\i0 \cf8 \strokec8 user
\f1\i \cf5 \strokec5  
\f0\i0 =
\f1\i  \cf9 \strokec9 firebase\cf5 \strokec5 .\cf6 \strokec6 auth
\f0\i0 \cf4 \strokec4 ()
\f1\i \cf5 \strokec5 .\cf11 \strokec11 currentUser
\f0\i0 \cf4 \strokec4 ;\cb1 \
\cb3         \cf5 \strokec5 let
\f1\i  
\f0\i0 \cf8 \strokec8 uid\cf4 \strokec4 ;\cb1 \
\cb3         \cf5 \strokec5 if\cf4 \strokec4  (\cf8 \strokec8 user\cf4 \strokec4  \cf5 \strokec5 !=\cf4 \strokec4  \cf12 \strokec12 null\cf4 \strokec4 ) \{\cb1 \
\cb3           \cf8 \strokec8 uid\cf4 \strokec4  \cf5 \strokec5 =\cf4 \strokec4  
\f1\i \cf9 \strokec9 user\cf5 \strokec5 .
\f0\i0 \cf11 \strokec11 uid\cf4 \strokec4 ;\cb1 \
\cb3         \}\cb1 \
\cb3         \cf5 \strokec5 let
\f1\i  
\f0\i0 \cf8 \strokec8 firebaseRef
\f1\i \cf5 \strokec5  
\f0\i0 =
\f1\i  \cf9 \strokec9 firebase\cf5 \strokec5 .\cf6 \strokec6 database
\f0\i0 \cf4 \strokec4 ()
\f1\i \cf5 \strokec5 .\cf6 \strokec6 ref
\f0\i0 \cf4 \strokec4 ();\cb1 \
\cb3         \cf5 \strokec5 let
\f1\i  
\f0\i0 \cf8 \strokec8 userData
\f1\i \cf5 \strokec5  
\f0\i0 =
\f1\i  
\f0\i0 \{\cf4 \cb1 \strokec4 \
\pard\pardeftab720\sl360\partightenfactor0

\f1\i \cf5 \cb3 \strokec5           userFullName
\f0\i0 :
\f1\i  
\f0\i0 \cf8 \strokec8 userFullName\cf16 \strokec16 ,\cf4 \cb1 \strokec4 \

\f1\i \cf5 \cb3 \strokec5           userPhoneNumber
\f0\i0 :
\f1\i  
\f0\i0 \cf8 \strokec8 userPhoneNumber\cf16 \strokec16 ,\cf4 \cb1 \strokec4 \

\f1\i \cf5 \cb3 \strokec5           userEmail
\f0\i0 :
\f1\i  
\f0\i0 \cf8 \strokec8 userEmail\cf16 \strokec16 ,\cf4 \cb1 \strokec4 \

\f1\i \cf5 \cb3 \strokec5           userPassword
\f0\i0 :
\f1\i  
\f0\i0 \cf8 \strokec8 userPassword\cf16 \strokec16 ,\cf4 \cb1 \strokec4 \

\f1\i \cf5 \cb3 \strokec5         
\f0\i0 \}\cf4 \strokec4 ;\cb1 \
\pard\pardeftab720\sl360\partightenfactor0
\cf4 \cb3         
\f1\i \cf9 \strokec9 console\cf5 \strokec5 .\cf6 \strokec6 log
\f0\i0 \cf4 \strokec4 (\cf8 \strokec8 uid\cf16 \strokec16 ,\cf4 \strokec4  \cf8 \strokec8 userData\cf4 \strokec4 );\cb1 \
\cb3         
\f1\i \cf9 \strokec9 firebaseRef\cf5 \strokec5 .\cf6 \strokec6 child
\f0\i0 \cf4 \strokec4 (\cf8 \strokec8 uid\cf4 \strokec4 )
\f1\i \cf5 \strokec5 .\cf6 \strokec6 set
\f0\i0 \cf4 \strokec4 (\cf8 \strokec8 userData\cf4 \strokec4 );\cb1 \
\cb3         
\f1\i \cf6 \strokec6 swal
\f0\i0 \cf4 \strokec4 (\cb1 \
\cb3           \cf7 \strokec7 "\cf10 \strokec10 Account Created\cf7 \strokec7 "\cf16 \strokec16 ,\cf4 \cb1 \strokec4 \
\cb3           \cf7 \strokec7 "\cf10 \strokec10 Your account was created successfully, you can log in now.\cf7 \strokec7 "\cf4 \cb1 \strokec4 \
\cb3         )
\f1\i \cf5 \strokec5 .\cf6 \strokec6 then
\f0\i0 \cf4 \strokec4 (\cf7 \strokec7 (\cf8 \strokec8 value\cf7 \strokec7 )\cf4 \strokec4  \cf5 \strokec5 =>\cf4 \strokec4  \{\cb1 \
\cb3           \cf17 \strokec17 setTimeout\cf4 \strokec4 (\cf5 \strokec5 function\cf4 \strokec4  \cf7 \strokec7 ()\cf4 \strokec4  \{\cb1 \
\cb3             
\f1\i \cf9 \strokec9 window\cf5 \strokec5 .\cf13 \strokec13 location\cf5 \strokec5 .\cf6 \strokec6 replace
\f0\i0 \cf4 \strokec4 (\cf7 \strokec7 "\cf10 \strokec10 index.html\cf7 \strokec7 "\cf4 \strokec4 );\cb1 \
\cb3           \}\cf16 \strokec16 ,\cf4 \strokec4  \cf15 \strokec15 1000\cf4 \strokec4 );\cb1 \
\cb3         \});\cb1 \
\cb3       \})\cb1 \
\cb3       
\f1\i \cf5 \strokec5 .\cf6 \strokec6 catch
\f0\i0 \cf4 \strokec4 (\cf7 \strokec7 (\cf8 \strokec8 error\cf7 \strokec7 )\cf4 \strokec4  \cf5 \strokec5 =>\cf4 \strokec4  \{\cb1 \
\cb3         \cf2 \strokec2 //
\f1\i  Handle Errors here.
\f0\i0 \cf4 \cb1 \strokec4 \
\cb3         \cf5 \strokec5 let
\f1\i  
\f0\i0 \cf8 \strokec8 errorCode
\f1\i \cf5 \strokec5  
\f0\i0 =
\f1\i  \cf9 \strokec9 error\cf5 \strokec5 .\cf11 \strokec11 code
\f0\i0 \cf4 \strokec4 ;\cb1 \
\cb3         \cf5 \strokec5 let
\f1\i  
\f0\i0 \cf8 \strokec8 errorMessage
\f1\i \cf5 \strokec5  
\f0\i0 =
\f1\i  \cf9 \strokec9 error\cf5 \strokec5 .\cf11 \strokec11 message
\f0\i0 \cf4 \strokec4 ;\cb1 \
\cb3         
\f1\i \cf6 \strokec6 swal
\f0\i0 \cf4 \strokec4 (\{\cb1 \
\cb3           type: \cf7 \strokec7 "\cf10 \strokec10 error\cf7 \strokec7 "\cf16 \strokec16 ,\cf4 \cb1 \strokec4 \
\cb3           title: \cf7 \strokec7 "\cf10 \strokec10 Error\cf7 \strokec7 "\cf16 \strokec16 ,\cf4 \cb1 \strokec4 \
\cb3           text: \cf8 \strokec8 errorMessage\cf16 \strokec16 ,\cf4 \cb1 \strokec4 \
\cb3         \});\cb1 \
\cb3       \});\cb1 \
\cb3   \}\cb1 \
\cb3 \}\cb1 \
\pard\pardeftab720\sl360\partightenfactor0
\cf2 \cb3 \strokec2 //
\f1\i  xxxxxxxxxx Working For Sign In Form xxxxxxxxxx
\f0\i0 \cf4 \cb1 \strokec4 \
\cf2 \cb3 \strokec2 //
\f1\i  xxxxxxxxxx Sign In Email Validation xxxxxxxxxx
\f0\i0 \cf4 \cb1 \strokec4 \
\pard\pardeftab720\sl360\partightenfactor0
\cf5 \cb3 \strokec5 function\cf4 \strokec4  
\f1\i \cf6 \strokec6 checkUserSIEmail
\f0\i0 \cf7 \strokec7 ()\cf4 \strokec4  \{\cb1 \
\pard\pardeftab720\sl360\partightenfactor0
\cf4 \cb3   \cf5 \strokec5 let
\f1\i  
\f0\i0 \cf8 \strokec8 userSIEmail
\f1\i \cf5 \strokec5  
\f0\i0 =
\f1\i  \cf9 \strokec9 document\cf5 \strokec5 .\cf6 \strokec6 getElementById
\f0\i0 \cf4 \strokec4 (\cf7 \strokec7 "\cf10 \strokec10 userSIEmail\cf7 \strokec7 "\cf4 \strokec4 );\cb1 \
\cb3   \cf5 \strokec5 let
\f1\i  
\f0\i0 \cf8 \strokec8 userSIEmailFormate
\f1\i \cf5 \strokec5  
\f0\i0 =
\f1\i  
\f0\i0 \cf7 \strokec7 /
\f1\i \cf5 \strokec5 ^
\f0\i0 \cf14 \strokec14 ((\cf6 \strokec6 [\cf9 \strokec9 ^
\f1\i \cf6 \strokec6 <>()\cf15 \strokec15 \\[\\]\\\\\cf6 \strokec6 .,;:\\s@"
\f0\i0 ]\cf9 \strokec9 +\cf14 \strokec14 (
\f1\i \cf15 \strokec15 \\.
\f0\i0 \cf6 \strokec6 [\cf9 \strokec9 ^
\f1\i \cf6 \strokec6 <>()\cf15 \strokec15 \\[\\]\\\\\cf6 \strokec6 .,;:\\s@"
\f0\i0 ]\cf9 \strokec9 +\cf14 \strokec14 )\cf9 \strokec9 *\cf14 \strokec14 )\cf9 \strokec9 |\cf14 \strokec14 (
\f1\i "\cf6 \strokec6 .
\f0\i0 \cf9 \strokec9 +
\f1\i \cf14 \strokec14 "
\f0\i0 ))
\f1\i @
\f0\i0 ((
\f1\i \cf15 \strokec15 \\[
\f0\i0 \cf6 \strokec6 [
\f1\i 0-9
\f0\i0 ]\cf9 \strokec9 \{1,3\}
\f1\i \cf15 \strokec15 \\.
\f0\i0 \cf6 \strokec6 [
\f1\i 0-9
\f0\i0 ]\cf9 \strokec9 \{1,3\}
\f1\i \cf15 \strokec15 \\.
\f0\i0 \cf6 \strokec6 [
\f1\i 0-9
\f0\i0 ]\cf9 \strokec9 \{1,3\}
\f1\i \cf15 \strokec15 \\.
\f0\i0 \cf6 \strokec6 [
\f1\i 0-9
\f0\i0 ]\cf9 \strokec9 \{1,3\}
\f1\i \cf15 \strokec15 \\]
\f0\i0 \cf14 \strokec14 )\cf9 \strokec9 |\cf14 \strokec14 ((\cf6 \strokec6 [
\f1\i a-zA-Z\\-0-9
\f0\i0 ]\cf9 \strokec9 +
\f1\i \cf15 \strokec15 \\.
\f0\i0 \cf14 \strokec14 )\cf9 \strokec9 +\cf6 \strokec6 [
\f1\i a-zA-Z
\f0\i0 ]\cf9 \strokec9 \{2,\}\cf14 \strokec14 ))
\f1\i \cf5 \strokec5 $
\f0\i0 \cf7 \strokec7 /\cf4 \strokec4 ;\cb1 \
\cb3   \cf5 \strokec5 let
\f1\i  
\f0\i0 \cf8 \strokec8 flag\cf4 \strokec4 ;\cb1 \
\cb3   \cf5 \strokec5 if\cf4 \strokec4  (
\f1\i \cf9 \strokec9 userSIEmail\cf5 \strokec5 .\cf13 \strokec13 value\cf5 \strokec5 .\cf6 \strokec6 match
\f0\i0 \cf4 \strokec4 (\cf8 \strokec8 userSIEmailFormate\cf4 \strokec4 )) \{\cb1 \
\cb3     \cf8 \strokec8 flag\cf4 \strokec4  \cf5 \strokec5 =\cf4 \strokec4  \cf12 \strokec12 false\cf4 \strokec4 ;\cb1 \
\cb3   \} \cf5 \strokec5 else\cf4 \strokec4  \{\cb1 \
\cb3     \cf8 \strokec8 flag\cf4 \strokec4  \cf5 \strokec5 =\cf4 \strokec4  \cf12 \strokec12 true\cf4 \strokec4 ;\cb1 \
\cb3   \}\cb1 \
\cb3   \cf5 \strokec5 if\cf4 \strokec4  (\cf8 \strokec8 flag\cf4 \strokec4 ) \{\cb1 \
\cb3     
\f1\i \cf9 \strokec9 document\cf5 \strokec5 .\cf6 \strokec6 getElementById
\f0\i0 \cf4 \strokec4 (\cf7 \strokec7 "\cf10 \strokec10 userSIEmailError\cf7 \strokec7 "\cf4 \strokec4 )
\f1\i \cf5 \strokec5 .\cf13 \strokec13 style\cf5 \strokec5 .
\f0\i0 \cf11 \strokec11 display\cf4 \strokec4  \cf5 \strokec5 =\cf4 \strokec4  \cf7 \strokec7 "\cf10 \strokec10 block\cf7 \strokec7 "\cf4 \strokec4 ;\cb1 \
\cb3   \} \cf5 \strokec5 else\cf4 \strokec4  \{\cb1 \
\cb3     
\f1\i \cf9 \strokec9 document\cf5 \strokec5 .\cf6 \strokec6 getElementById
\f0\i0 \cf4 \strokec4 (\cf7 \strokec7 "\cf10 \strokec10 userSIEmailError\cf7 \strokec7 "\cf4 \strokec4 )
\f1\i \cf5 \strokec5 .\cf13 \strokec13 style\cf5 \strokec5 .
\f0\i0 \cf11 \strokec11 display\cf4 \strokec4  \cf5 \strokec5 =\cf4 \strokec4  \cf7 \strokec7 "\cf10 \strokec10 none\cf7 \strokec7 "\cf4 \strokec4 ;\cb1 \
\cb3   \}\cb1 \
\cb3 \}\cb1 \
\pard\pardeftab720\sl360\partightenfactor0
\cf2 \cb3 \strokec2 //
\f1\i  xxxxxxxxxx Sign In Password Validation xxxxxxxxxx
\f0\i0 \cf4 \cb1 \strokec4 \
\pard\pardeftab720\sl360\partightenfactor0
\cf5 \cb3 \strokec5 function\cf4 \strokec4  
\f1\i \cf6 \strokec6 checkUserSIPassword
\f0\i0 \cf7 \strokec7 ()\cf4 \strokec4  \{\cb1 \
\pard\pardeftab720\sl360\partightenfactor0
\cf4 \cb3   \cf5 \strokec5 let
\f1\i  
\f0\i0 \cf8 \strokec8 userSIPassword
\f1\i \cf5 \strokec5  
\f0\i0 =
\f1\i  \cf9 \strokec9 document\cf5 \strokec5 .\cf6 \strokec6 getElementById
\f0\i0 \cf4 \strokec4 (\cf7 \strokec7 "\cf10 \strokec10 userSIPassword\cf7 \strokec7 "\cf4 \strokec4 );\cb1 \
\cb3   \cf5 \strokec5 let
\f1\i  
\f0\i0 \cf8 \strokec8 userSIPasswordFormate
\f1\i \cf5 \strokec5  
\f0\i0 =
\f1\i \cf14 \strokec14  
\f0\i0 \cf7 \strokec7 /\cf14 \strokec14 (?=
\f1\i \cf6 \strokec6 .
\f0\i0 \cf9 \strokec9 *
\f1\i \cf6 \strokec6 \\d
\f0\i0 \cf14 \strokec14 )(?=
\f1\i \cf6 \strokec6 .
\f0\i0 \cf9 \strokec9 *\cf6 \strokec6 [
\f1\i a-z
\f0\i0 ]\cf14 \strokec14 )(?=
\f1\i \cf6 \strokec6 .
\f0\i0 \cf9 \strokec9 *\cf6 \strokec6 [
\f1\i A-Z
\f0\i0 ]\cf14 \strokec14 )
\f1\i \cf6 \strokec6 .
\f0\i0 \cf9 \strokec9 \{10,\}\cf7 \strokec7 /\cf4 \strokec4 ;\cb1 \
\cb3   \cf5 \strokec5 let
\f1\i  
\f0\i0 \cf8 \strokec8 flag\cf4 \strokec4 ;\cb1 \
\cb3   \cf5 \strokec5 if\cf4 \strokec4  (
\f1\i \cf9 \strokec9 userSIPassword\cf5 \strokec5 .\cf13 \strokec13 value\cf5 \strokec5 .\cf6 \strokec6 match
\f0\i0 \cf4 \strokec4 (\cf8 \strokec8 userSIPasswordFormate\cf4 \strokec4 )) \{\cb1 \
\cb3     \cf8 \strokec8 flag\cf4 \strokec4  \cf5 \strokec5 =\cf4 \strokec4  \cf12 \strokec12 false\cf4 \strokec4 ;\cb1 \
\cb3   \} \cf5 \strokec5 else\cf4 \strokec4  \{\cb1 \
\cb3     \cf8 \strokec8 flag\cf4 \strokec4  \cf5 \strokec5 =\cf4 \strokec4  \cf12 \strokec12 true\cf4 \strokec4 ;\cb1 \
\cb3   \}\cb1 \
\cb3   \cf5 \strokec5 if\cf4 \strokec4  (\cf8 \strokec8 flag\cf4 \strokec4 ) \{\cb1 \
\cb3     
\f1\i \cf9 \strokec9 document\cf5 \strokec5 .\cf6 \strokec6 getElementById
\f0\i0 \cf4 \strokec4 (\cf7 \strokec7 "\cf10 \strokec10 userSIPasswordError\cf7 \strokec7 "\cf4 \strokec4 )
\f1\i \cf5 \strokec5 .\cf13 \strokec13 style\cf5 \strokec5 .
\f0\i0 \cf11 \strokec11 display\cf4 \strokec4  \cf5 \strokec5 =\cf4 \strokec4  \cf7 \strokec7 "\cf10 \strokec10 block\cf7 \strokec7 "\cf4 \strokec4 ;\cb1 \
\cb3   \} \cf5 \strokec5 else\cf4 \strokec4  \{\cb1 \
\cb3     
\f1\i \cf9 \strokec9 document\cf5 \strokec5 .\cf6 \strokec6 getElementById
\f0\i0 \cf4 \strokec4 (\cf7 \strokec7 "\cf10 \strokec10 userSIPasswordError\cf7 \strokec7 "\cf4 \strokec4 )
\f1\i \cf5 \strokec5 .\cf13 \strokec13 style\cf5 \strokec5 .
\f0\i0 \cf11 \strokec11 display\cf4 \strokec4  \cf5 \strokec5 =\cf4 \strokec4  \cf7 \strokec7 "\cf10 \strokec10 none\cf7 \strokec7 "\cf4 \strokec4 ;\cb1 \
\cb3   \}\cb1 \
\cb3 \}\cb1 \
\pard\pardeftab720\sl360\partightenfactor0
\cf2 \cb3 \strokec2 //
\f1\i  xxxxxxxxxx Check email or password exsist in firebase authentication xxxxxxxxxx
\f0\i0 \cf4 \cb1 \strokec4 \
\pard\pardeftab720\sl360\partightenfactor0
\cf5 \cb3 \strokec5 function\cf4 \strokec4  
\f1\i \cf6 \strokec6 signIn
\f0\i0 \cf7 \strokec7 ()\cf4 \strokec4  \{\cb1 \
\pard\pardeftab720\sl360\partightenfactor0
\cf4 \cb3   \cf5 \strokec5 let
\f1\i  
\f0\i0 \cf8 \strokec8 userSIEmail
\f1\i \cf5 \strokec5  
\f0\i0 =
\f1\i  \cf9 \strokec9 document\cf5 \strokec5 .\cf6 \strokec6 getElementById
\f0\i0 \cf4 \strokec4 (\cf7 \strokec7 "\cf10 \strokec10 userSIEmail\cf7 \strokec7 "\cf4 \strokec4 )
\f1\i \cf5 \strokec5 .\cf11 \strokec11 value
\f0\i0 \cf4 \strokec4 ;\cb1 \
\cb3   \cf5 \strokec5 let
\f1\i  
\f0\i0 \cf8 \strokec8 userSIPassword
\f1\i \cf5 \strokec5  
\f0\i0 =
\f1\i  \cf9 \strokec9 document\cf5 \strokec5 .\cf6 \strokec6 getElementById
\f0\i0 \cf4 \strokec4 (\cf7 \strokec7 "\cf10 \strokec10 userSIPassword\cf7 \strokec7 "\cf4 \strokec4 )
\f1\i \cf5 \strokec5 .\cf11 \strokec11 value
\f0\i0 \cf4 \strokec4 ;\cb1 \
\cb3   \cf5 \strokec5 let
\f1\i  
\f0\i0 \cf8 \strokec8 userSIEmailFormate
\f1\i \cf5 \strokec5  
\f0\i0 =
\f1\i  
\f0\i0 \cf7 \strokec7 /
\f1\i \cf5 \strokec5 ^
\f0\i0 \cf14 \strokec14 ((\cf6 \strokec6 [\cf9 \strokec9 ^
\f1\i \cf6 \strokec6 <>()\cf15 \strokec15 \\[\\]\\\\\cf6 \strokec6 .,;:\\s@"
\f0\i0 ]\cf9 \strokec9 +\cf14 \strokec14 (
\f1\i \cf15 \strokec15 \\.
\f0\i0 \cf6 \strokec6 [\cf9 \strokec9 ^
\f1\i \cf6 \strokec6 <>()\cf15 \strokec15 \\[\\]\\\\\cf6 \strokec6 .,;:\\s@"
\f0\i0 ]\cf9 \strokec9 +\cf14 \strokec14 )\cf9 \strokec9 *\cf14 \strokec14 )\cf9 \strokec9 |\cf14 \strokec14 (
\f1\i "\cf6 \strokec6 .
\f0\i0 \cf9 \strokec9 +
\f1\i \cf14 \strokec14 "
\f0\i0 ))
\f1\i @
\f0\i0 ((
\f1\i \cf15 \strokec15 \\[
\f0\i0 \cf6 \strokec6 [
\f1\i 0-9
\f0\i0 ]\cf9 \strokec9 \{1,3\}
\f1\i \cf15 \strokec15 \\.
\f0\i0 \cf6 \strokec6 [
\f1\i 0-9
\f0\i0 ]\cf9 \strokec9 \{1,3\}
\f1\i \cf15 \strokec15 \\.
\f0\i0 \cf6 \strokec6 [
\f1\i 0-9
\f0\i0 ]\cf9 \strokec9 \{1,3\}
\f1\i \cf15 \strokec15 \\.
\f0\i0 \cf6 \strokec6 [
\f1\i 0-9
\f0\i0 ]\cf9 \strokec9 \{1,3\}
\f1\i \cf15 \strokec15 \\]
\f0\i0 \cf14 \strokec14 )\cf9 \strokec9 |\cf14 \strokec14 ((\cf6 \strokec6 [
\f1\i a-zA-Z\\-0-9
\f0\i0 ]\cf9 \strokec9 +
\f1\i \cf15 \strokec15 \\.
\f0\i0 \cf14 \strokec14 )\cf9 \strokec9 +\cf6 \strokec6 [
\f1\i a-zA-Z
\f0\i0 ]\cf9 \strokec9 \{2,\}\cf14 \strokec14 ))
\f1\i \cf5 \strokec5 $
\f0\i0 \cf7 \strokec7 /\cf4 \strokec4 ;\cb1 \
\cb3   \cf5 \strokec5 let
\f1\i  
\f0\i0 \cf8 \strokec8 userSIPasswordFormate
\f1\i \cf5 \strokec5  
\f0\i0 =
\f1\i \cf14 \strokec14  
\f0\i0 \cf7 \strokec7 /\cf14 \strokec14 (?=
\f1\i \cf6 \strokec6 .
\f0\i0 \cf9 \strokec9 *
\f1\i \cf6 \strokec6 \\d
\f0\i0 \cf14 \strokec14 )(?=
\f1\i \cf6 \strokec6 .
\f0\i0 \cf9 \strokec9 *\cf6 \strokec6 [
\f1\i a-z
\f0\i0 ]\cf14 \strokec14 )(?=
\f1\i \cf6 \strokec6 .
\f0\i0 \cf9 \strokec9 *\cf6 \strokec6 [
\f1\i A-Z
\f0\i0 ]\cf14 \strokec14 )
\f1\i \cf6 \strokec6 .
\f0\i0 \cf9 \strokec9 \{10,\}\cf7 \strokec7 /\cf4 \strokec4 ;\cb1 \
\
\cb3   \cf5 \strokec5 let
\f1\i  
\f0\i0 \cf8 \strokec8 checkUserEmailValid
\f1\i \cf5 \strokec5  
\f0\i0 =
\f1\i  \cf9 \strokec9 userSIEmail\cf5 \strokec5 .\cf6 \strokec6 match
\f0\i0 \cf4 \strokec4 (\cf8 \strokec8 userSIEmailFormate\cf4 \strokec4 );\cb1 \
\cb3   \cf5 \strokec5 let
\f1\i  
\f0\i0 \cf8 \strokec8 checkUserPasswordValid
\f1\i \cf5 \strokec5  
\f0\i0 =
\f1\i  \cf9 \strokec9 userSIPassword\cf5 \strokec5 .\cf6 \strokec6 match
\f0\i0 \cf4 \strokec4 (\cf8 \strokec8 userSIPasswordFormate\cf4 \strokec4 );\cb1 \
\
\cb3   \cf5 \strokec5 if\cf4 \strokec4  (\cf8 \strokec8 checkUserEmailValid\cf4 \strokec4  \cf5 \strokec5 ==\cf4 \strokec4  \cf12 \strokec12 null\cf4 \strokec4 ) \{\cb1 \
\cb3     
\f1\i \cf5 \strokec5 return
\f0\i0 \cf4 \strokec4  
\f1\i \cf6 \strokec6 checkUserSIEmail
\f0\i0 \cf4 \strokec4 ();\cb1 \
\cb3   \} \cf5 \strokec5 else\cf4 \strokec4  \cf5 \strokec5 if\cf4 \strokec4  (\cf8 \strokec8 checkUserPasswordValid\cf4 \strokec4  \cf5 \strokec5 ==\cf4 \strokec4  \cf12 \strokec12 null\cf4 \strokec4 ) \{\cb1 \
\cb3     
\f1\i \cf5 \strokec5 return
\f0\i0 \cf4 \strokec4  
\f1\i \cf6 \strokec6 checkUserSIPassword
\f0\i0 \cf4 \strokec4 ();\cb1 \
\cb3   \} \cf5 \strokec5 else\cf4 \strokec4  \{\cb1 \
\cb3     \cf8 \strokec8 firebase\cf4 \cb1 \strokec4 \
\cb3       
\f1\i \cf5 \strokec5 .\cf6 \strokec6 auth
\f0\i0 \cf4 \strokec4 ()\cb1 \
\cb3       
\f1\i \cf5 \strokec5 .\cf6 \strokec6 signInWithEmailAndPassword
\f0\i0 \cf4 \strokec4 (\cf8 \strokec8 userSIEmail\cf16 \strokec16 ,\cf4 \strokec4  \cf8 \strokec8 userSIPassword\cf4 \strokec4 )\cb1 \
\cb3       
\f1\i \cf5 \strokec5 .\cf6 \strokec6 then
\f0\i0 \cf4 \strokec4 (\cf7 \strokec7 (\cf8 \strokec8 success\cf7 \strokec7 )\cf4 \strokec4  \cf5 \strokec5 =>\cf4 \strokec4  \{\cb1 \
\cb3         
\f1\i \cf6 \strokec6 swal
\f0\i0 \cf4 \strokec4 (\{\cb1 \
\cb3           type: \cf7 \strokec7 "\cf10 \strokec10 successfull\cf7 \strokec7 "\cf16 \strokec16 ,\cf4 \cb1 \strokec4 \
\cb3           title: \cf7 \strokec7 "\cf10 \strokec10 Succesfully signed in\cf7 \strokec7 "\cf16 \strokec16 ,\cf4 \cb1 \strokec4 \
\cb3         \})
\f1\i \cf5 \strokec5 .\cf6 \strokec6 then
\f0\i0 \cf4 \strokec4 (\cf7 \strokec7 (\cf8 \strokec8 value\cf7 \strokec7 )\cf4 \strokec4  \cf5 \strokec5 =>\cf4 \strokec4  \{\cb1 \
\cb3           \cf17 \strokec17 setTimeout\cf4 \strokec4 (\cf5 \strokec5 function\cf4 \strokec4  \cf7 \strokec7 ()\cf4 \strokec4  \{\cb1 \
\cb3             
\f1\i \cf9 \strokec9 window\cf5 \strokec5 .\cf13 \strokec13 location\cf5 \strokec5 .\cf6 \strokec6 replace
\f0\i0 \cf4 \strokec4 (\cf7 \strokec7 "\cf10 \strokec10 index.html\cf7 \strokec7 "\cf4 \strokec4 );\cb1 \
\cb3           \}\cf16 \strokec16 ,\cf4 \strokec4  \cf15 \strokec15 1000\cf4 \strokec4 );\cb1 \
\cb3         \});\cb1 \
\cb3       \})\cb1 \
\cb3       
\f1\i \cf5 \strokec5 .\cf6 \strokec6 catch
\f0\i0 \cf4 \strokec4 (\cf7 \strokec7 (\cf8 \strokec8 error\cf7 \strokec7 )\cf4 \strokec4  \cf5 \strokec5 =>\cf4 \strokec4  \{\cb1 \
\cb3         \cf2 \strokec2 //
\f1\i  Handle Errors here.
\f0\i0 \cf4 \cb1 \strokec4 \
\cb3         \cf5 \strokec5 let
\f1\i  
\f0\i0 \cf8 \strokec8 errorCode
\f1\i \cf5 \strokec5  
\f0\i0 =
\f1\i  \cf9 \strokec9 error\cf5 \strokec5 .\cf11 \strokec11 code
\f0\i0 \cf4 \strokec4 ;\cb1 \
\cb3         \cf5 \strokec5 let
\f1\i  
\f0\i0 \cf8 \strokec8 errorMessage
\f1\i \cf5 \strokec5  
\f0\i0 =
\f1\i  \cf9 \strokec9 error\cf5 \strokec5 .\cf11 \strokec11 message
\f0\i0 \cf4 \strokec4 ;\cb1 \
\cb3         
\f1\i \cf6 \strokec6 swal
\f0\i0 \cf4 \strokec4 (\{\cb1 \
\cb3           type: \cf7 \strokec7 "\cf10 \strokec10 error\cf7 \strokec7 "\cf16 \strokec16 ,\cf4 \cb1 \strokec4 \
\cb3           title: \cf7 \strokec7 "\cf10 \strokec10 Error\cf7 \strokec7 "\cf16 \strokec16 ,\cf4 \cb1 \strokec4 \
\cb3           text: \cf8 \strokec8 errorMessage\cf16 \strokec16 ,\cf4 \cb1 \strokec4 \
\cb3         \});\cb1 \
\cb3       \});\cb1 \
\cb3   \}\cb1 \
\cb3 \}\cb1 \
\pard\pardeftab720\sl360\partightenfactor0
\cf2 \cb3 \strokec2 //
\f1\i  xxxxxxxxxx Working For Profile Page xxxxxxxxxx
\f0\i0 \cf4 \cb1 \strokec4 \
\cf2 \cb3 \strokec2 //
\f1\i  xxxxxxxxxx Get data from server and show in the page xxxxxxxxxx
\f0\i0 \cf4 \cb1 \strokec4 \
\pard\pardeftab720\sl360\partightenfactor0

\f1\i \cf9 \cb3 \strokec9 firebase\cf5 \strokec5 .\cf6 \strokec6 auth
\f0\i0 \cf4 \strokec4 ()
\f1\i \cf5 \strokec5 .\cf6 \strokec6 onAuthStateChanged
\f0\i0 \cf4 \strokec4 (\cf7 \strokec7 (\cf8 \strokec8 user\cf7 \strokec7 )\cf4 \strokec4  \cf5 \strokec5 =>\cf4 \strokec4  \{\cb1 \
\pard\pardeftab720\sl360\partightenfactor0
\cf4 \cb3   \cf5 \strokec5 if\cf4 \strokec4  (\cf8 \strokec8 user\cf4 \strokec4 ) \{\cb1 \
\cb3     \cf17 \strokec17 setTimeout\cf4 \strokec4 (\cf7 \strokec7 ()\cf4 \strokec4  \cf5 \strokec5 =>\cf4 \strokec4  \{\cb1 \
\cb3       \cf5 \strokec5 if\cf4 \strokec4  (\cb1 \
\cb3         
\f1\i \cf9 \strokec9 window\cf5 \strokec5 .\cf13 \strokec13 location\cf5 \strokec5 .
\f0\i0 \cf11 \strokec11 pathname\cf4 \strokec4  \cf5 \strokec5 ===\cf4 \strokec4  \cf7 \strokec7 "\cf10 \strokec10 /sign-in.html\cf7 \strokec7 "\cf4 \strokec4  \cf5 \strokec5 ||\cf4 \cb1 \strokec4 \
\cb3         
\f1\i \cf9 \strokec9 window\cf5 \strokec5 .\cf13 \strokec13 location\cf5 \strokec5 .
\f0\i0 \cf11 \strokec11 pathname\cf4 \strokec4  \cf5 \strokec5 ===\cf4 \strokec4  \cf7 \strokec7 "\cf10 \strokec10 /sign-up.html\cf7 \strokec7 "\cf4 \cb1 \strokec4 \
\cb3       ) \{\cb1 \
\cb3         
\f1\i \cf9 \strokec9 location\cf5 \strokec5 .\cf6 \strokec6 replace
\f0\i0 \cf4 \strokec4 (\cf7 \strokec7 "\cf10 \strokec10 index.html\cf7 \strokec7 "\cf4 \strokec4 );\cb1 \
\cb3       \}\cb1 \
\cb3     \}, \cf15 \strokec15 3000\cf4 \strokec4 );\cb1 \
\
\cb3     \cf2 \strokec2 //
\f1\i    User is signed in.
\f0\i0 \cf4 \cb1 \strokec4 \
\cb3     \cf5 \strokec5 let
\f1\i  
\f0\i0 \cf8 \strokec8 user
\f1\i \cf5 \strokec5  
\f0\i0 =
\f1\i  \cf9 \strokec9 firebase\cf5 \strokec5 .\cf6 \strokec6 auth
\f0\i0 \cf4 \strokec4 ()
\f1\i \cf5 \strokec5 .\cf11 \strokec11 currentUser
\f0\i0 \cf4 \strokec4 ;\cb1 \
\cb3     \cf5 \strokec5 let
\f1\i  
\f0\i0 \cf8 \strokec8 uid\cf4 \strokec4 ;\cb1 \
\cb3     \cf5 \strokec5 if\cf4 \strokec4  (\cf8 \strokec8 user\cf4 \strokec4  \cf5 \strokec5 !=\cf4 \strokec4  \cf12 \strokec12 null\cf4 \strokec4 ) \{\cb1 \
\cb3       \cf8 \strokec8 uid\cf4 \strokec4  \cf5 \strokec5 =\cf4 \strokec4  
\f1\i \cf9 \strokec9 user\cf5 \strokec5 .
\f0\i0 \cf11 \strokec11 uid\cf4 \strokec4 ;\cb1 \
\cb3     \}\cb1 \
\cb3     \cf5 \strokec5 let
\f1\i  
\f0\i0 \cf8 \strokec8 firebaseRefKey
\f1\i \cf5 \strokec5  
\f0\i0 =
\f1\i  \cf9 \strokec9 firebase\cf5 \strokec5 .\cf6 \strokec6 database
\f0\i0 \cf4 \strokec4 ()
\f1\i \cf5 \strokec5 .\cf6 \strokec6 ref
\f0\i0 \cf4 \strokec4 ()
\f1\i \cf5 \strokec5 .\cf6 \strokec6 child
\f0\i0 \cf4 \strokec4 (\cf8 \strokec8 uid\cf4 \strokec4 );\cb1 \
\cb3     
\f1\i \cf9 \strokec9 firebaseRefKey\cf5 \strokec5 .\cf6 \strokec6 on
\f0\i0 \cf4 \strokec4 (\cf7 \strokec7 "\cf10 \strokec10 value\cf7 \strokec7 "\cf4 \strokec4 , \cf7 \strokec7 (\cf8 \strokec8 dataSnapShot\cf7 \strokec7 )\cf4 \strokec4  \cf5 \strokec5 =>\cf4 \strokec4  \{\cb1 \
\cb3       
\f1\i \cf5 \strokec5 try
\f0\i0 \cf4 \strokec4  \{\cb1 \
\cb3         
\f1\i \cf9 \strokec9 localStorage\cf5 \strokec5 .\cf6 \strokec6 setItem
\f0\i0 \cf4 \strokec4 (\cf7 \strokec7 "\cf10 \strokec10 fullname\cf7 \strokec7 "\cf4 \strokec4 , 
\f1\i \cf9 \strokec9 dataSnapShot\cf5 \strokec5 .\cf6 \strokec6 val
\f0\i0 \cf4 \strokec4 ()
\f1\i \cf5 \strokec5 .
\f0\i0 \cf11 \strokec11 userFullName\cf4 \strokec4 );\cb1 \
\cb3         
\f1\i \cf9 \strokec9 localStorage\cf5 \strokec5 .\cf6 \strokec6 setItem
\f0\i0 \cf4 \strokec4 (\cf7 \strokec7 "\cf10 \strokec10 email\cf7 \strokec7 "\cf4 \strokec4 , 
\f1\i \cf9 \strokec9 dataSnapShot\cf5 \strokec5 .\cf6 \strokec6 val
\f0\i0 \cf4 \strokec4 ()
\f1\i \cf5 \strokec5 .
\f0\i0 \cf11 \strokec11 userEmail\cf4 \strokec4 );\cb1 \
\cb3         
\f1\i \cf9 \strokec9 localStorage\cf5 \strokec5 .\cf6 \strokec6 setItem
\f0\i0 \cf4 \strokec4 (\cf7 \strokec7 "\cf10 \strokec10 phonenumber\cf7 \strokec7 "\cf4 \strokec4 , 
\f1\i \cf9 \strokec9 dataSnapShot\cf5 \strokec5 .\cf6 \strokec6 val
\f0\i0 \cf4 \strokec4 ()
\f1\i \cf5 \strokec5 .
\f0\i0 \cf11 \strokec11 userPhoneNumber\cf4 \strokec4 );\cb1 \
\cb3         \cf2 \strokec2 //
\f1\i  document.getElementById(
\f0\i0 \cf4 \cb1 \strokec4 \
\cb3         \cf2 \strokec2 //
\f1\i    "userPfFullName"
\f0\i0 \cf4 \cb1 \strokec4 \
\cb3         \cf2 \strokec2 //
\f1\i  ).innerHTML = dataSnapShot.val().userFullName;
\f0\i0 \cf4 \cb1 \strokec4 \
\cb3         \cf2 \strokec2 //
\f1\i  document.getElementById(
\f0\i0 \cf4 \cb1 \strokec4 \
\cb3         \cf2 \strokec2 //
\f1\i    "userPfSurname"
\f0\i0 \cf4 \cb1 \strokec4 \
\cb3         \cf2 \strokec2 //
\f1\i  ).innerHTML = dataSnapShot.val().userPhoneNumber;
\f0\i0 \cf4 \cb1 \strokec4 \
\cb3         \cf2 \strokec2 //
\f1\i  userEmail = dataSnapShot.val().userEmail;
\f0\i0 \cf4 \cb1 \strokec4 \
\cb3         \cf2 \strokec2 //
\f1\i  userPassword = dataSnapShot.val().userPassword;
\f0\i0 \cf4 \cb1 \strokec4 \
\cb3         \cf2 \strokec2 //
\f1\i  document
\f0\i0 \cf4 \cb1 \strokec4 \
\cb3         \cf2 \strokec2 //
\f1\i    .getElementById("userPfFb")
\f0\i0 \cf4 \cb1 \strokec4 \
\cb3         \cf2 \strokec2 //
\f1\i    .setAttribute("href", dataSnapShot.val().userFb);
\f0\i0 \cf4 \cb1 \strokec4 \
\cb3         \cf2 \strokec2 //
\f1\i  document
\f0\i0 \cf4 \cb1 \strokec4 \
\cb3         \cf2 \strokec2 //
\f1\i    .getElementById("userPfTw")
\f0\i0 \cf4 \cb1 \strokec4 \
\cb3         \cf2 \strokec2 //
\f1\i    .setAttribute("href", dataSnapShot.val().userTw);
\f0\i0 \cf4 \cb1 \strokec4 \
\cb3         \cf2 \strokec2 //
\f1\i  document
\f0\i0 \cf4 \cb1 \strokec4 \
\cb3         \cf2 \strokec2 //
\f1\i    .getElementById("userPfGp")
\f0\i0 \cf4 \cb1 \strokec4 \
\cb3         \cf2 \strokec2 //
\f1\i    .setAttribute("href", dataSnapShot.val().userGp);
\f0\i0 \cf4 \cb1 \strokec4 \
\cb3         \cf2 \strokec2 //
\f1\i  document.getElementById(
\f0\i0 \cf4 \cb1 \strokec4 \
\cb3         \cf2 \strokec2 //
\f1\i    "userPfBio"
\f0\i0 \cf4 \cb1 \strokec4 \
\cb3         \cf2 \strokec2 //
\f1\i  ).innerHTML = dataSnapShot.val().userBio;
\f0\i0 \cf4 \cb1 \strokec4 \
\cb3       \} 
\f1\i \cf5 \strokec5 catch
\f0\i0 \cf4 \strokec4  (\cf8 \strokec8 err\cf4 \strokec4 ) \{\cb1 \
\cb3         
\f1\i \cf9 \strokec9 console\cf5 \strokec5 .\cf6 \strokec6 log
\f0\i0 \cf4 \strokec4 (\cf7 \strokec7 "\cf10 \strokec10 Not Profile page\cf7 \strokec7 "\cf4 \strokec4 );\cb1 \
\cb3       \}\cb1 \
\cb3     \});\cb1 \
\cb3   \} \cf5 \strokec5 else\cf4 \strokec4  \{\cb1 \
\cb3     \cf2 \strokec2 //
\f1\i    No user is signed in.
\f0\i0 \cf4 \cb1 \strokec4 \
\cb3     
\f1\i \cf9 \strokec9 console\cf5 \strokec5 .\cf6 \strokec6 log
\f0\i0 \cf4 \strokec4 (\cf7 \strokec7 "\cf10 \strokec10 No user\cf7 \strokec7 "\cf4 \strokec4 );\cb1 \
\cb3     \cf5 \strokec5 if\cf4 \strokec4  (\cb1 \
\cb3       
\f1\i \cf9 \strokec9 window\cf5 \strokec5 .\cf13 \strokec13 location\cf5 \strokec5 .
\f0\i0 \cf11 \strokec11 pathname\cf4 \strokec4  \cf5 \strokec5 ===\cf4 \strokec4  \cf7 \strokec7 "\cf10 \strokec10 /index.html\cf7 \strokec7 "\cf4 \strokec4  \cf5 \strokec5 ||\cf4 \cb1 \strokec4 \
\cb3       
\f1\i \cf9 \strokec9 window\cf5 \strokec5 .\cf13 \strokec13 location\cf5 \strokec5 .
\f0\i0 \cf11 \strokec11 pathname\cf4 \strokec4  \cf5 \strokec5 ===\cf4 \strokec4  \cf7 \strokec7 "\cf10 \strokec10 /\cf7 \strokec7 "\cf4 \cb1 \strokec4 \
\cb3     ) \{\cb1 \
\cb3       
\f1\i \cf9 \strokec9 location\cf5 \strokec5 .\cf6 \strokec6 replace
\f0\i0 \cf4 \strokec4 (\cf7 \strokec7 "\cf10 \strokec10 /sign-up.html\cf7 \strokec7 "\cf4 \strokec4 );\cb1 \
\cb3     \}\cb1 \
\cb3   \}\cb1 \
\cb3 \});\cb1 \
\pard\pardeftab720\sl360\partightenfactor0
\cf2 \cb3 \strokec2 //
\f1\i  xxxxxxxxxx Show edit profile form with detail xxxxxxxxxx
\f0\i0 \cf4 \cb1 \strokec4 \
\pard\pardeftab720\sl360\partightenfactor0
\cf5 \cb3 \strokec5 function\cf4 \strokec4  
\f1\i \cf6 \strokec6 showEditProfileForm
\f0\i0 \cf7 \strokec7 ()\cf4 \strokec4  \{\cb1 \
\pard\pardeftab720\sl360\partightenfactor0
\cf4 \cb3   
\f1\i \cf9 \strokec9 document\cf5 \strokec5 .\cf6 \strokec6 getElementById
\f0\i0 \cf4 \strokec4 (\cf7 \strokec7 "\cf10 \strokec10 profileSection\cf7 \strokec7 "\cf4 \strokec4 )
\f1\i \cf5 \strokec5 .\cf13 \strokec13 style\cf5 \strokec5 .
\f0\i0 \cf11 \strokec11 display\cf4 \strokec4  \cf5 \strokec5 =\cf4 \strokec4  \cf7 \strokec7 "\cf10 \strokec10 none\cf7 \strokec7 "\cf4 \strokec4 ;\cb1 \
\cb3   
\f1\i \cf9 \strokec9 document\cf5 \strokec5 .\cf6 \strokec6 getElementById
\f0\i0 \cf4 \strokec4 (\cf7 \strokec7 "\cf10 \strokec10 editProfileForm\cf7 \strokec7 "\cf4 \strokec4 )
\f1\i \cf5 \strokec5 .\cf13 \strokec13 style\cf5 \strokec5 .
\f0\i0 \cf11 \strokec11 display\cf4 \strokec4  \cf5 \strokec5 =\cf4 \strokec4  \cf7 \strokec7 "\cf10 \strokec10 block\cf7 \strokec7 "\cf4 \strokec4 ;\cb1 \
\cb3   \cf5 \strokec5 let
\f1\i  
\f0\i0 \cf8 \strokec8 userPfFullName
\f1\i \cf5 \strokec5  
\f0\i0 =
\f1\i  \cf9 \strokec9 document\cf5 \strokec5 .\cf6 \strokec6 getElementById
\f0\i0 \cf4 \strokec4 (\cf7 \strokec7 "\cf10 \strokec10 userPfFullName\cf7 \strokec7 "\cf4 \strokec4 )
\f1\i \cf5 \strokec5 .\cf11 \strokec11 innerHTML
\f0\i0 \cf4 \strokec4 ;\cb1 \
\cb3   \cf5 \strokec5 let
\f1\i  
\f0\i0 \cf8 \strokec8 userPfSurname
\f1\i \cf5 \strokec5  
\f0\i0 =
\f1\i  \cf9 \strokec9 document\cf5 \strokec5 .\cf6 \strokec6 getElementById
\f0\i0 \cf4 \strokec4 (\cf7 \strokec7 "\cf10 \strokec10 userPfSurname\cf7 \strokec7 "\cf4 \strokec4 )
\f1\i \cf5 \strokec5 .\cf11 \strokec11 innerHTML
\f0\i0 \cf4 \strokec4 ;\cb1 \
\cb3   \cf5 \strokec5 let
\f1\i  
\f0\i0 \cf8 \strokec8 userPfFb
\f1\i \cf5 \strokec5  
\f0\i0 =
\f1\i  \cf9 \strokec9 document\cf5 \strokec5 .\cf6 \strokec6 getElementById
\f0\i0 \cf4 \strokec4 (\cf7 \strokec7 "\cf10 \strokec10 userPfFb\cf7 \strokec7 "\cf4 \strokec4 )
\f1\i \cf5 \strokec5 .\cf6 \strokec6 getAttribute
\f0\i0 \cf4 \strokec4 (\cf7 \strokec7 "\cf10 \strokec10 href\cf7 \strokec7 "\cf4 \strokec4 );\cb1 \
\cb3   \cf5 \strokec5 let
\f1\i  
\f0\i0 \cf8 \strokec8 userPfTw
\f1\i \cf5 \strokec5  
\f0\i0 =
\f1\i  \cf9 \strokec9 document\cf5 \strokec5 .\cf6 \strokec6 getElementById
\f0\i0 \cf4 \strokec4 (\cf7 \strokec7 "\cf10 \strokec10 userPfTw\cf7 \strokec7 "\cf4 \strokec4 )
\f1\i \cf5 \strokec5 .\cf6 \strokec6 getAttribute
\f0\i0 \cf4 \strokec4 (\cf7 \strokec7 "\cf10 \strokec10 href\cf7 \strokec7 "\cf4 \strokec4 );\cb1 \
\cb3   \cf5 \strokec5 let
\f1\i  
\f0\i0 \cf8 \strokec8 userPfGp
\f1\i \cf5 \strokec5  
\f0\i0 =
\f1\i  \cf9 \strokec9 document\cf5 \strokec5 .\cf6 \strokec6 getElementById
\f0\i0 \cf4 \strokec4 (\cf7 \strokec7 "\cf10 \strokec10 userPfGp\cf7 \strokec7 "\cf4 \strokec4 )
\f1\i \cf5 \strokec5 .\cf6 \strokec6 getAttribute
\f0\i0 \cf4 \strokec4 (\cf7 \strokec7 "\cf10 \strokec10 href\cf7 \strokec7 "\cf4 \strokec4 );\cb1 \
\cb3   \cf5 \strokec5 let
\f1\i  
\f0\i0 \cf8 \strokec8 userPfBio
\f1\i \cf5 \strokec5  
\f0\i0 =
\f1\i  \cf9 \strokec9 document\cf5 \strokec5 .\cf6 \strokec6 getElementById
\f0\i0 \cf4 \strokec4 (\cf7 \strokec7 "\cf10 \strokec10 userPfBio\cf7 \strokec7 "\cf4 \strokec4 )
\f1\i \cf5 \strokec5 .\cf11 \strokec11 innerHTML
\f0\i0 \cf4 \strokec4 ;\cb1 \
\cb3   
\f1\i \cf9 \strokec9 document\cf5 \strokec5 .\cf6 \strokec6 getElementById
\f0\i0 \cf4 \strokec4 (\cf7 \strokec7 "\cf10 \strokec10 userFullName\cf7 \strokec7 "\cf4 \strokec4 )
\f1\i \cf5 \strokec5 .
\f0\i0 \cf11 \strokec11 value\cf4 \strokec4  \cf5 \strokec5 =\cf4 \strokec4  \cf8 \strokec8 userPfFullName\cf4 \strokec4 ;\cb1 \
\cb3   
\f1\i \cf9 \strokec9 document\cf5 \strokec5 .\cf6 \strokec6 getElementById
\f0\i0 \cf4 \strokec4 (\cf7 \strokec7 "\cf10 \strokec10 userSurname\cf7 \strokec7 "\cf4 \strokec4 )
\f1\i \cf5 \strokec5 .
\f0\i0 \cf11 \strokec11 value\cf4 \strokec4  \cf5 \strokec5 =\cf4 \strokec4  \cf8 \strokec8 userPfSurname\cf4 \strokec4 ;\cb1 \
\cb3   
\f1\i \cf9 \strokec9 document\cf5 \strokec5 .\cf6 \strokec6 getElementById
\f0\i0 \cf4 \strokec4 (\cf7 \strokec7 "\cf10 \strokec10 userFacebook\cf7 \strokec7 "\cf4 \strokec4 )
\f1\i \cf5 \strokec5 .
\f0\i0 \cf11 \strokec11 value\cf4 \strokec4  \cf5 \strokec5 =\cf4 \strokec4  \cf8 \strokec8 userPfFb\cf4 \strokec4 ;\cb1 \
\cb3   
\f1\i \cf9 \strokec9 document\cf5 \strokec5 .\cf6 \strokec6 getElementById
\f0\i0 \cf4 \strokec4 (\cf7 \strokec7 "\cf10 \strokec10 userTwitter\cf7 \strokec7 "\cf4 \strokec4 )
\f1\i \cf5 \strokec5 .
\f0\i0 \cf11 \strokec11 value\cf4 \strokec4  \cf5 \strokec5 =\cf4 \strokec4  \cf8 \strokec8 userPfTw\cf4 \strokec4 ;\cb1 \
\cb3   
\f1\i \cf9 \strokec9 document\cf5 \strokec5 .\cf6 \strokec6 getElementById
\f0\i0 \cf4 \strokec4 (\cf7 \strokec7 "\cf10 \strokec10 userGooglePlus\cf7 \strokec7 "\cf4 \strokec4 )
\f1\i \cf5 \strokec5 .
\f0\i0 \cf11 \strokec11 value\cf4 \strokec4  \cf5 \strokec5 =\cf4 \strokec4  \cf8 \strokec8 userPfGp\cf4 \strokec4 ;\cb1 \
\cb3   
\f1\i \cf9 \strokec9 document\cf5 \strokec5 .\cf6 \strokec6 getElementById
\f0\i0 \cf4 \strokec4 (\cf7 \strokec7 "\cf10 \strokec10 userBio\cf7 \strokec7 "\cf4 \strokec4 )
\f1\i \cf5 \strokec5 .
\f0\i0 \cf11 \strokec11 value\cf4 \strokec4  \cf5 \strokec5 =\cf4 \strokec4  \cf8 \strokec8 userPfBio\cf4 \strokec4 ;\cb1 \
\cb3 \}\cb1 \
\pard\pardeftab720\sl360\partightenfactor0
\cf2 \cb3 \strokec2 //
\f1\i  xxxxxxxxxx Hide edit profile form xxxxxxxxxx
\f0\i0 \cf4 \cb1 \strokec4 \
\pard\pardeftab720\sl360\partightenfactor0
\cf5 \cb3 \strokec5 function\cf4 \strokec4  
\f1\i \cf6 \strokec6 hideEditProfileForm
\f0\i0 \cf7 \strokec7 ()\cf4 \strokec4  \{\cb1 \
\pard\pardeftab720\sl360\partightenfactor0
\cf4 \cb3   
\f1\i \cf9 \strokec9 document\cf5 \strokec5 .\cf6 \strokec6 getElementById
\f0\i0 \cf4 \strokec4 (\cf7 \strokec7 "\cf10 \strokec10 profileSection\cf7 \strokec7 "\cf4 \strokec4 )
\f1\i \cf5 \strokec5 .\cf13 \strokec13 style\cf5 \strokec5 .
\f0\i0 \cf11 \strokec11 display\cf4 \strokec4  \cf5 \strokec5 =\cf4 \strokec4  \cf7 \strokec7 "\cf10 \strokec10 block\cf7 \strokec7 "\cf4 \strokec4 ;\cb1 \
\cb3   
\f1\i \cf9 \strokec9 document\cf5 \strokec5 .\cf6 \strokec6 getElementById
\f0\i0 \cf4 \strokec4 (\cf7 \strokec7 "\cf10 \strokec10 editProfileForm\cf7 \strokec7 "\cf4 \strokec4 )
\f1\i \cf5 \strokec5 .\cf13 \strokec13 style\cf5 \strokec5 .
\f0\i0 \cf11 \strokec11 display\cf4 \strokec4  \cf5 \strokec5 =\cf4 \strokec4  \cf7 \strokec7 "\cf10 \strokec10 none\cf7 \strokec7 "\cf4 \strokec4 ;\cb1 \
\cb3 \}\cb1 \
\pard\pardeftab720\sl360\partightenfactor0
\cf2 \cb3 \strokec2 //
\f1\i  xxxxxxxxxx Save profile and update database xxxxxxxxxx
\f0\i0 \cf4 \cb1 \strokec4 \
\pard\pardeftab720\sl360\partightenfactor0
\cf5 \cb3 \strokec5 function\cf4 \strokec4  
\f1\i \cf6 \strokec6 saveProfile
\f0\i0 \cf7 \strokec7 ()\cf4 \strokec4  \{\cb1 \
\pard\pardeftab720\sl360\partightenfactor0
\cf4 \cb3   \cf5 \strokec5 let
\f1\i  
\f0\i0 \cf8 \strokec8 userFullName
\f1\i \cf5 \strokec5  
\f0\i0 =
\f1\i  \cf9 \strokec9 document\cf5 \strokec5 .\cf6 \strokec6 getElementById
\f0\i0 \cf4 \strokec4 (\cf7 \strokec7 "\cf10 \strokec10 userFullName\cf7 \strokec7 "\cf4 \strokec4 )
\f1\i \cf5 \strokec5 .\cf11 \strokec11 value
\f0\i0 \cf4 \strokec4 ;\cb1 \
\cb3   \cf5 \strokec5 let
\f1\i  
\f0\i0 \cf8 \strokec8 userSurname
\f1\i \cf5 \strokec5  
\f0\i0 =
\f1\i  \cf9 \strokec9 document\cf5 \strokec5 .\cf6 \strokec6 getElementById
\f0\i0 \cf4 \strokec4 (\cf7 \strokec7 "\cf10 \strokec10 userSurname\cf7 \strokec7 "\cf4 \strokec4 )
\f1\i \cf5 \strokec5 .\cf11 \strokec11 value
\f0\i0 \cf4 \strokec4 ;\cb1 \
\cb3   \cf5 \strokec5 let
\f1\i  
\f0\i0 \cf8 \strokec8 userFacebook
\f1\i \cf5 \strokec5  
\f0\i0 =
\f1\i  \cf9 \strokec9 document\cf5 \strokec5 .\cf6 \strokec6 getElementById
\f0\i0 \cf4 \strokec4 (\cf7 \strokec7 "\cf10 \strokec10 userFacebook\cf7 \strokec7 "\cf4 \strokec4 )
\f1\i \cf5 \strokec5 .\cf11 \strokec11 value
\f0\i0 \cf4 \strokec4 ;\cb1 \
\cb3   \cf5 \strokec5 let
\f1\i  
\f0\i0 \cf8 \strokec8 userTwitter
\f1\i \cf5 \strokec5  
\f0\i0 =
\f1\i  \cf9 \strokec9 document\cf5 \strokec5 .\cf6 \strokec6 getElementById
\f0\i0 \cf4 \strokec4 (\cf7 \strokec7 "\cf10 \strokec10 userTwitter\cf7 \strokec7 "\cf4 \strokec4 )
\f1\i \cf5 \strokec5 .\cf11 \strokec11 value
\f0\i0 \cf4 \strokec4 ;\cb1 \
\cb3   \cf5 \strokec5 let
\f1\i  
\f0\i0 \cf8 \strokec8 userGooglePlus
\f1\i \cf5 \strokec5  
\f0\i0 =
\f1\i  \cf9 \strokec9 document\cf5 \strokec5 .\cf6 \strokec6 getElementById
\f0\i0 \cf4 \strokec4 (\cf7 \strokec7 "\cf10 \strokec10 userGooglePlus\cf7 \strokec7 "\cf4 \strokec4 )
\f1\i \cf5 \strokec5 .\cf11 \strokec11 value
\f0\i0 \cf4 \strokec4 ;\cb1 \
\cb3   \cf5 \strokec5 let
\f1\i  
\f0\i0 \cf8 \strokec8 userBio
\f1\i \cf5 \strokec5  
\f0\i0 =
\f1\i  \cf9 \strokec9 document\cf5 \strokec5 .\cf6 \strokec6 getElementById
\f0\i0 \cf4 \strokec4 (\cf7 \strokec7 "\cf10 \strokec10 userBio\cf7 \strokec7 "\cf4 \strokec4 )
\f1\i \cf5 \strokec5 .\cf11 \strokec11 value
\f0\i0 \cf4 \strokec4 ;\cb1 \
\cb3   \cf5 \strokec5 let
\f1\i  
\f0\i0 \cf8 \strokec8 userFullNameFormate
\f1\i \cf5 \strokec5  
\f0\i0 =
\f1\i \cf14 \strokec14  
\f0\i0 \cf7 \strokec7 /
\f1\i \cf5 \strokec5 ^
\f0\i0 \cf14 \strokec14 (\cf6 \strokec6 [
\f1\i A-Za-z.\\s_-
\f0\i0 ]\cf14 \strokec14 )\cf7 \strokec7 /\cf4 \strokec4 ;\cb1 \
\cb3   \cf5 \strokec5 let
\f1\i  
\f0\i0 \cf8 \strokec8 checkUserFullNameValid
\f1\i \cf5 \strokec5  
\f0\i0 =
\f1\i  \cf9 \strokec9 userFullName\cf5 \strokec5 .\cf6 \strokec6 match
\f0\i0 \cf4 \strokec4 (\cf8 \strokec8 userFullNameFormate\cf4 \strokec4 );\cb1 \
\cb3   \cf5 \strokec5 if\cf4 \strokec4  (\cf8 \strokec8 checkUserFullNameValid\cf4 \strokec4  \cf5 \strokec5 ==\cf4 \strokec4  \cf12 \strokec12 null\cf4 \strokec4 ) \{\cb1 \
\cb3     
\f1\i \cf5 \strokec5 return
\f0\i0 \cf4 \strokec4  
\f1\i \cf6 \strokec6 checkUserFullName
\f0\i0 \cf4 \strokec4 ();\cb1 \
\cb3   \} \cf5 \strokec5 else\cf4 \strokec4  \cf5 \strokec5 if\cf4 \strokec4  (\cf8 \strokec8 userSurname\cf4 \strokec4  \cf5 \strokec5 ===\cf4 \strokec4  \cf7 \strokec7 ""\cf4 \strokec4 ) \{\cb1 \
\cb3     
\f1\i \cf5 \strokec5 return
\f0\i0 \cf4 \strokec4  
\f1\i \cf6 \strokec6 checkUserSurname
\f0\i0 \cf4 \strokec4 ();\cb1 \
\cb3   \} \cf5 \strokec5 else\cf4 \strokec4  \{\cb1 \
\cb3     \cf5 \strokec5 let
\f1\i  
\f0\i0 \cf8 \strokec8 user
\f1\i \cf5 \strokec5  
\f0\i0 =
\f1\i  \cf9 \strokec9 firebase\cf5 \strokec5 .\cf6 \strokec6 auth
\f0\i0 \cf4 \strokec4 ()
\f1\i \cf5 \strokec5 .\cf11 \strokec11 currentUser
\f0\i0 \cf4 \strokec4 ;\cb1 \
\cb3     \cf5 \strokec5 let
\f1\i  
\f0\i0 \cf8 \strokec8 uid\cf4 \strokec4 ;\cb1 \
\cb3     \cf5 \strokec5 if\cf4 \strokec4  (\cf8 \strokec8 user\cf4 \strokec4  \cf5 \strokec5 !=\cf4 \strokec4  \cf12 \strokec12 null\cf4 \strokec4 ) \{\cb1 \
\cb3       \cf8 \strokec8 uid\cf4 \strokec4  \cf5 \strokec5 =\cf4 \strokec4  
\f1\i \cf9 \strokec9 user\cf5 \strokec5 .
\f0\i0 \cf11 \strokec11 uid\cf4 \strokec4 ;\cb1 \
\cb3     \}\cb1 \
\cb3     \cf5 \strokec5 let
\f1\i  
\f0\i0 \cf8 \strokec8 firebaseRef
\f1\i \cf5 \strokec5  
\f0\i0 =
\f1\i  \cf9 \strokec9 firebase\cf5 \strokec5 .\cf6 \strokec6 database
\f0\i0 \cf4 \strokec4 ()
\f1\i \cf5 \strokec5 .\cf6 \strokec6 ref
\f0\i0 \cf4 \strokec4 ();\cb1 \
\cb3     \cf5 \strokec5 let
\f1\i  
\f0\i0 \cf8 \strokec8 userData
\f1\i \cf5 \strokec5  
\f0\i0 =
\f1\i  
\f0\i0 \{\cf4 \cb1 \strokec4 \
\pard\pardeftab720\sl360\partightenfactor0

\f1\i \cf5 \cb3 \strokec5       userFullName
\f0\i0 :
\f1\i  
\f0\i0 \cf8 \strokec8 userFullName\cf16 \strokec16 ,\cf4 \cb1 \strokec4 \

\f1\i \cf5 \cb3 \strokec5       userSurname
\f0\i0 :
\f1\i  
\f0\i0 \cf8 \strokec8 userSurname\cf16 \strokec16 ,\cf4 \cb1 \strokec4 \

\f1\i \cf5 \cb3 \strokec5       userFb
\f0\i0 :
\f1\i  
\f0\i0 \cf8 \strokec8 userFacebook\cf16 \strokec16 ,\cf4 \cb1 \strokec4 \

\f1\i \cf5 \cb3 \strokec5       userTw
\f0\i0 :
\f1\i  
\f0\i0 \cf8 \strokec8 userTwitter\cf16 \strokec16 ,\cf4 \cb1 \strokec4 \

\f1\i \cf5 \cb3 \strokec5       userGp
\f0\i0 :
\f1\i  
\f0\i0 \cf8 \strokec8 userGooglePlus\cf16 \strokec16 ,\cf4 \cb1 \strokec4 \

\f1\i \cf5 \cb3 \strokec5       userBio
\f0\i0 :
\f1\i  
\f0\i0 \cf8 \strokec8 userBio\cf16 \strokec16 ,\cf4 \cb1 \strokec4 \

\f1\i \cf5 \cb3 \strokec5     
\f0\i0 \}\cf4 \strokec4 ;\cb1 \
\pard\pardeftab720\sl360\partightenfactor0
\cf4 \cb3     
\f1\i \cf9 \strokec9 firebaseRef\cf5 \strokec5 .\cf6 \strokec6 child
\f0\i0 \cf4 \strokec4 (\cf8 \strokec8 uid\cf4 \strokec4 )
\f1\i \cf5 \strokec5 .\cf6 \strokec6 set
\f0\i0 \cf4 \strokec4 (\cf8 \strokec8 userData\cf4 \strokec4 );\cb1 \
\cb3     
\f1\i \cf6 \strokec6 swal
\f0\i0 \cf4 \strokec4 (\{\cb1 \
\cb3       type: \cf7 \strokec7 "\cf10 \strokec10 successfull\cf7 \strokec7 "\cf16 \strokec16 ,\cf4 \cb1 \strokec4 \
\cb3       title: \cf7 \strokec7 "\cf10 \strokec10 Update successfull\cf7 \strokec7 "\cf16 \strokec16 ,\cf4 \cb1 \strokec4 \
\cb3       text: \cf7 \strokec7 "\cf10 \strokec10 Profile updated.\cf7 \strokec7 "\cf16 \strokec16 ,\cf4 \cb1 \strokec4 \
\cb3     \})
\f1\i \cf5 \strokec5 .\cf6 \strokec6 then
\f0\i0 \cf4 \strokec4 (\cf7 \strokec7 (\cf8 \strokec8 value\cf7 \strokec7 )\cf4 \strokec4  \cf5 \strokec5 =>\cf4 \strokec4  \{\cb1 \
\cb3       \cf17 \strokec17 setTimeout\cf4 \strokec4 (\cf5 \strokec5 function\cf4 \strokec4  \cf7 \strokec7 ()\cf4 \strokec4  \{\cb1 \
\cb3         
\f1\i \cf9 \strokec9 document\cf5 \strokec5 .\cf6 \strokec6 getElementById
\f0\i0 \cf4 \strokec4 (\cf7 \strokec7 "\cf10 \strokec10 profileSection\cf7 \strokec7 "\cf4 \strokec4 )
\f1\i \cf5 \strokec5 .\cf13 \strokec13 style\cf5 \strokec5 .
\f0\i0 \cf11 \strokec11 display\cf4 \strokec4  \cf5 \strokec5 =\cf4 \strokec4  \cf7 \strokec7 "\cf10 \strokec10 block\cf7 \strokec7 "\cf4 \strokec4 ;\cb1 \
\
\cb3         
\f1\i \cf9 \strokec9 document\cf5 \strokec5 .\cf6 \strokec6 getElementById
\f0\i0 \cf4 \strokec4 (\cf7 \strokec7 "\cf10 \strokec10 editProfileForm\cf7 \strokec7 "\cf4 \strokec4 )
\f1\i \cf5 \strokec5 .\cf13 \strokec13 style\cf5 \strokec5 .
\f0\i0 \cf11 \strokec11 display\cf4 \strokec4  \cf5 \strokec5 =\cf4 \strokec4  \cf7 \strokec7 "\cf10 \strokec10 none\cf7 \strokec7 "\cf4 \strokec4 ;\cb1 \
\cb3       \}\cf16 \strokec16 ,\cf4 \strokec4  \cf15 \strokec15 1000\cf4 \strokec4 );\cb1 \
\cb3     \});\cb1 \
\cb3   \}\cb1 \
\cb3 \}\cb1 \
\pard\pardeftab720\sl360\partightenfactor0
\cf2 \cb3 \strokec2 //
\f1\i  xxxxxxxxxx Working For Sign Out xxxxxxxxxx
\f0\i0 \cf4 \cb1 \strokec4 \
\pard\pardeftab720\sl360\partightenfactor0
\cf5 \cb3 \strokec5 function\cf4 \strokec4  
\f1\i \cf6 \strokec6 signOut
\f0\i0 \cf7 \strokec7 ()\cf4 \strokec4  \{\cb1 \
\pard\pardeftab720\sl360\partightenfactor0
\cf4 \cb3   \cf8 \strokec8 firebase\cf4 \cb1 \strokec4 \
\cb3     
\f1\i \cf5 \strokec5 .\cf6 \strokec6 auth
\f0\i0 \cf4 \strokec4 ()\cb1 \
\cb3     
\f1\i \cf5 \strokec5 .\cf6 \strokec6 signOut
\f0\i0 \cf4 \strokec4 ()\cb1 \
\cb3     
\f1\i \cf5 \strokec5 .\cf6 \strokec6 then
\f0\i0 \cf4 \strokec4 (\cf5 \strokec5 function\cf4 \strokec4  \cf7 \strokec7 ()\cf4 \strokec4  \{\cb1 \
\cb3       \cf2 \strokec2 //
\f1\i  Sign-out successful.
\f0\i0 \cf4 \cb1 \strokec4 \
\cb3       
\f1\i \cf6 \strokec6 swal
\f0\i0 \cf4 \strokec4 (\{\cb1 \
\cb3         type: \cf7 \strokec7 "\cf10 \strokec10 successfull\cf7 \strokec7 "\cf16 \strokec16 ,\cf4 \cb1 \strokec4 \
\cb3         title: \cf7 \strokec7 "\cf10 \strokec10 Signed Out\cf7 \strokec7 "\cf16 \strokec16 ,\cf4 \cb1 \strokec4 \
\cb3       \})
\f1\i \cf5 \strokec5 .\cf6 \strokec6 then
\f0\i0 \cf4 \strokec4 (\cf7 \strokec7 (\cf8 \strokec8 value\cf7 \strokec7 )\cf4 \strokec4  \cf5 \strokec5 =>\cf4 \strokec4  \{\cb1 \
\cb3         \cf17 \strokec17 setTimeout\cf4 \strokec4 (\cf5 \strokec5 function\cf4 \strokec4  \cf7 \strokec7 ()\cf4 \strokec4  \{\cb1 \
\cb3           
\f1\i \cf9 \strokec9 window\cf5 \strokec5 .\cf13 \strokec13 location\cf5 \strokec5 .\cf6 \strokec6 replace
\f0\i0 \cf4 \strokec4 (\cf7 \strokec7 "\cf10 \strokec10 sign-in.html\cf7 \strokec7 "\cf4 \strokec4 );\cb1 \
\cb3         \}\cf16 \strokec16 ,\cf4 \strokec4  \cf15 \strokec15 1000\cf4 \strokec4 );\cb1 \
\cb3       \});\cb1 \
\cb3     \})\cb1 \
\cb3     
\f1\i \cf5 \strokec5 .\cf6 \strokec6 catch
\f0\i0 \cf4 \strokec4 (\cf5 \strokec5 function\cf4 \strokec4  \cf7 \strokec7 (\cf8 \strokec8 error\cf7 \strokec7 )\cf4 \strokec4  \{\cb1 \
\cb3       \cf2 \strokec2 //
\f1\i  An error happened.
\f0\i0 \cf4 \cb1 \strokec4 \
\cb3       \cf5 \strokec5 let
\f1\i  
\f0\i0 \cf8 \strokec8 errorMessage
\f1\i \cf5 \strokec5  
\f0\i0 =
\f1\i  \cf9 \strokec9 error\cf5 \strokec5 .\cf11 \strokec11 message
\f0\i0 \cf4 \strokec4 ;\cb1 \
\cb3       
\f1\i \cf6 \strokec6 swal
\f0\i0 \cf4 \strokec4 (\{\cb1 \
\cb3         type: \cf7 \strokec7 "\cf10 \strokec10 error\cf7 \strokec7 "\cf16 \strokec16 ,\cf4 \cb1 \strokec4 \
\cb3         title: \cf7 \strokec7 "\cf10 \strokec10 Error\cf7 \strokec7 "\cf16 \strokec16 ,\cf4 \cb1 \strokec4 \
\cb3         text: \cf7 \strokec7 "\cf10 \strokec10 Error\cf7 \strokec7 "\cf16 \strokec16 ,\cf4 \cb1 \strokec4 \
\cb3       \});\cb1 \
\cb3     \});\cb1 \
\cb3 \}\cb1 \
\pard\pardeftab720\sl360\partightenfactor0
\cf5 \cb3 \strokec5 function\cf4 \strokec4  
\f1\i \cf6 \strokec6 openLink
\f0\i0 \cf7 \strokec7 (\cf8 \strokec8 link\cf7 \strokec7 )\cf4 \strokec4  \{\cb1 \
\pard\pardeftab720\sl360\partightenfactor0
\cf4 \cb3   \cf5 \strokec5 let
\f1\i  
\f0\i0 \cf8 \strokec8 fam
\f1\i \cf5 \strokec5  
\f0\i0 =
\f1\i  \cf9 \strokec9 document\cf5 \strokec5 .\cf6 \strokec6 getElementById
\f0\i0 \cf4 \strokec4 (\cf7 \strokec7 "\cf10 \strokec10 family-gathering\cf7 \strokec7 "\cf4 \strokec4 );\cb1 \
\cb3   \cf5 \strokec5 let
\f1\i  
\f0\i0 \cf8 \strokec8 spe
\f1\i \cf5 \strokec5  
\f0\i0 =
\f1\i  \cf9 \strokec9 document\cf5 \strokec5 .\cf6 \strokec6 getElementById
\f0\i0 \cf4 \strokec4 (\cf7 \strokec7 "\cf10 \strokec10 special-events\cf7 \strokec7 "\cf4 \strokec4 );\cb1 \
\cb3   \cf5 \strokec5 let
\f1\i  
\f0\i0 \cf8 \strokec8 soc
\f1\i \cf5 \strokec5  
\f0\i0 =
\f1\i  \cf9 \strokec9 document\cf5 \strokec5 .\cf6 \strokec6 getElementById
\f0\i0 \cf4 \strokec4 (\cf7 \strokec7 "\cf10 \strokec10 social-events\cf7 \strokec7 "\cf4 \strokec4 );\cb1 \
\cb3   \cf5 \strokec5 switch\cf4 \strokec4  (\cf8 \strokec8 link\cf4 \strokec4 ) \{\cb1 \
\cb3     \cf5 \strokec5 case\cf4 \strokec4  \cf7 \strokec7 "\cf10 \strokec10 FAMILY GATHERING\cf7 \strokec7 "\cf4 \strokec4 :\cb1 \
\cb3       
\f1\i \cf9 \strokec9 document\cf5 \strokec5 .\cf6 \strokec6 getElementById
\f0\i0 \cf4 \strokec4 (\cf7 \strokec7 "\cf10 \strokec10 dinner-party\cf7 \strokec7 "\cf4 \strokec4 )
\f1\i \cf5 \strokec5 .
\f0\i0 \cf11 \strokec11 src\cf4 \strokec4  \cf5 \strokec5 =\cf4 \strokec4  \cf7 \strokec7 "\cf10 \strokec10 images/dinner-party.jpg\cf7 \strokec7 "\cf4 \strokec4 ;\cb1 \
\cb3       
\f1\i \cf9 \strokec9 document\cf5 \strokec5 .\cf6 \strokec6 getElementById
\f0\i0 \cf4 \strokec4 (\cf7 \strokec7 "\cf10 \strokec10 dinner-title\cf7 \strokec7 "\cf4 \strokec4 )
\f1\i \cf5 \strokec5 .
\f0\i0 \cf11 \strokec11 innerHTML\cf4 \strokec4  \cf5 \strokec5 =\cf4 \strokec4  \cf7 \strokec7 "\cf10 \strokec10 Family Gathering\cf7 \strokec7 "\cf4 \strokec4 ;\cb1 \
\cb3       
\f1\i \cf9 \strokec9 document\cf5 \strokec5 .\cf6 \strokec6 getElementById
\f0\i0 \cf4 \strokec4 (\cf7 \strokec7 "\cf10 \strokec10 dinner-subtitle\cf7 \strokec7 "\cf4 \strokec4 )
\f1\i \cf5 \strokec5 .
\f0\i0 \cf11 \strokec11 innerHTML\cf4 \strokec4  \cf5 \strokec5 =\cf4 \cb1 \strokec4 \
\cb3         \cf7 \strokec7 "\cf10 \strokec10 We love catering for entire families. So please bring everyone along for a special meal with your loved ones. We'll provide a memorable experience for all.\cf7 \strokec7 "\cf4 \strokec4 ;\cb1 \
\cb3       
\f1\i \cf9 \strokec9 fam\cf5 \strokec5 .\cf13 \strokec13 classList\cf5 \strokec5 .\cf6 \strokec6 add
\f0\i0 \cf4 \strokec4 (\cf7 \strokec7 "\cf10 \strokec10 font-weight-bold\cf7 \strokec7 "\cf4 \strokec4 );\cb1 \
\cb3       
\f1\i \cf9 \strokec9 spe\cf5 \strokec5 .\cf13 \strokec13 classList\cf5 \strokec5 .\cf6 \strokec6 remove
\f0\i0 \cf4 \strokec4 (\cf7 \strokec7 "\cf10 \strokec10 font-weight-bold\cf7 \strokec7 "\cf4 \strokec4 );\cb1 \
\cb3       
\f1\i \cf9 \strokec9 soc\cf5 \strokec5 .\cf13 \strokec13 classList\cf5 \strokec5 .\cf6 \strokec6 remove
\f0\i0 \cf4 \strokec4 (\cf7 \strokec7 "\cf10 \strokec10 font-weight-bold\cf7 \strokec7 "\cf4 \strokec4 );\cb1 \
\cb3       
\f1\i \cf5 \strokec5 break
\f0\i0 \cf4 \strokec4 ;\cb1 \
\cb3     \cf5 \strokec5 case\cf4 \strokec4  \cf7 \strokec7 "\cf10 \strokec10 SPECIAL EVENTS\cf7 \strokec7 "\cf4 \strokec4 :\cb1 \
\cb3       
\f1\i \cf9 \strokec9 document\cf5 \strokec5 .\cf6 \strokec6 getElementById
\f0\i0 \cf4 \strokec4 (\cf7 \strokec7 "\cf10 \strokec10 dinner-party\cf7 \strokec7 "\cf4 \strokec4 )
\f1\i \cf5 \strokec5 .
\f0\i0 \cf11 \strokec11 src\cf4 \strokec4  \cf5 \strokec5 =\cf4 \strokec4  \cf7 \strokec7 "\cf10 \strokec10 images/special-events.jpg\cf7 \strokec7 "\cf4 \strokec4 ;\cb1 \
\cb3       
\f1\i \cf9 \strokec9 document\cf5 \strokec5 .\cf6 \strokec6 getElementById
\f0\i0 \cf4 \strokec4 (\cf7 \strokec7 "\cf10 \strokec10 dinner-title\cf7 \strokec7 "\cf4 \strokec4 )
\f1\i \cf5 \strokec5 .
\f0\i0 \cf11 \strokec11 innerHTML\cf4 \strokec4  \cf5 \strokec5 =\cf4 \strokec4  \cf7 \strokec7 "\cf10 \strokec10 Special Events\cf7 \strokec7 "\cf4 \strokec4 ;\cb1 \
\cb3       
\f1\i \cf9 \strokec9 document\cf5 \strokec5 .\cf6 \strokec6 getElementById
\f0\i0 \cf4 \strokec4 (\cf7 \strokec7 "\cf10 \strokec10 dinner-subtitle\cf7 \strokec7 "\cf4 \strokec4 )
\f1\i \cf5 \strokec5 .
\f0\i0 \cf11 \strokec11 innerHTML\cf4 \strokec4  \cf5 \strokec5 =\cf4 \cb1 \strokec4 \
\cb3         \cf7 \strokec7 "\cf10 \strokec10 We love catering for special events. So please bring everyone along for a special meal with your loved ones. We'll provide a memorable experience for all.\cf7 \strokec7 "\cf4 \strokec4 ;\cb1 \
\cb3       
\f1\i \cf9 \strokec9 fam\cf5 \strokec5 .\cf13 \strokec13 classList\cf5 \strokec5 .\cf6 \strokec6 remove
\f0\i0 \cf4 \strokec4 (\cf7 \strokec7 "\cf10 \strokec10 font-weight-bold\cf7 \strokec7 "\cf4 \strokec4 );\cb1 \
\cb3       
\f1\i \cf9 \strokec9 spe\cf5 \strokec5 .\cf13 \strokec13 classList\cf5 \strokec5 .\cf6 \strokec6 add
\f0\i0 \cf4 \strokec4 (\cf7 \strokec7 "\cf10 \strokec10 font-weight-bold\cf7 \strokec7 "\cf4 \strokec4 );\cb1 \
\cb3       
\f1\i \cf9 \strokec9 soc\cf5 \strokec5 .\cf13 \strokec13 classList\cf5 \strokec5 .\cf6 \strokec6 remove
\f0\i0 \cf4 \strokec4 (\cf7 \strokec7 "\cf10 \strokec10 font-weight-bold\cf7 \strokec7 "\cf4 \strokec4 );\cb1 \
\cb3       
\f1\i \cf5 \strokec5 break
\f0\i0 \cf4 \strokec4 ;\cb1 \
\cb3     \cf5 \strokec5 case\cf4 \strokec4  \cf7 \strokec7 "\cf10 \strokec10 SOCIAL EVENTS\cf7 \strokec7 "\cf4 \strokec4 :\cb1 \
\cb3       
\f1\i \cf9 \strokec9 document\cf5 \strokec5 .\cf6 \strokec6 getElementById
\f0\i0 \cf4 \strokec4 (\cf7 \strokec7 "\cf10 \strokec10 dinner-party\cf7 \strokec7 "\cf4 \strokec4 )
\f1\i \cf5 \strokec5 .
\f0\i0 \cf11 \strokec11 src\cf4 \strokec4  \cf5 \strokec5 =\cf4 \strokec4  \cf7 \strokec7 "\cf10 \strokec10 images/social-events.jpg\cf7 \strokec7 "\cf4 \strokec4 ;\cb1 \
\cb3       
\f1\i \cf9 \strokec9 document\cf5 \strokec5 .\cf6 \strokec6 getElementById
\f0\i0 \cf4 \strokec4 (\cf7 \strokec7 "\cf10 \strokec10 dinner-title\cf7 \strokec7 "\cf4 \strokec4 )
\f1\i \cf5 \strokec5 .
\f0\i0 \cf11 \strokec11 innerHTML\cf4 \strokec4  \cf5 \strokec5 =\cf4 \strokec4  \cf7 \strokec7 "\cf10 \strokec10 Social Events\cf7 \strokec7 "\cf4 \strokec4 ;\cb1 \
\cb3       
\f1\i \cf9 \strokec9 document\cf5 \strokec5 .\cf6 \strokec6 getElementById
\f0\i0 \cf4 \strokec4 (\cf7 \strokec7 "\cf10 \strokec10 dinner-subtitle\cf7 \strokec7 "\cf4 \strokec4 )
\f1\i \cf5 \strokec5 .
\f0\i0 \cf11 \strokec11 innerHTML\cf4 \strokec4  \cf5 \strokec5 =\cf4 \cb1 \strokec4 \
\cb3         \cf7 \strokec7 "\cf10 \strokec10 We love catering for social events. So please bring everyone along for a special meal with your loved ones. We'll provide a memorable experience for all.\cf7 \strokec7 "\cf4 \strokec4 ;\cb1 \
\cb3       
\f1\i \cf9 \strokec9 fam\cf5 \strokec5 .\cf13 \strokec13 classList\cf5 \strokec5 .\cf6 \strokec6 remove
\f0\i0 \cf4 \strokec4 (\cf7 \strokec7 "\cf10 \strokec10 font-weight-bold\cf7 \strokec7 "\cf4 \strokec4 );\cb1 \
\cb3       
\f1\i \cf9 \strokec9 spe\cf5 \strokec5 .\cf13 \strokec13 classList\cf5 \strokec5 .\cf6 \strokec6 remove
\f0\i0 \cf4 \strokec4 (\cf7 \strokec7 "\cf10 \strokec10 font-weight-bold\cf7 \strokec7 "\cf4 \strokec4 );\cb1 \
\cb3       
\f1\i \cf9 \strokec9 soc\cf5 \strokec5 .\cf13 \strokec13 classList\cf5 \strokec5 .\cf6 \strokec6 add
\f0\i0 \cf4 \strokec4 (\cf7 \strokec7 "\cf10 \strokec10 font-weight-bold\cf7 \strokec7 "\cf4 \strokec4 );\cb1 \
\cb3       
\f1\i \cf5 \strokec5 break
\f0\i0 \cf4 \strokec4 ;\cb1 \
\
\cb3     \cf5 \strokec5 default\cf4 \strokec4 :\cb1 \
\cb3       
\f1\i \cf5 \strokec5 break
\f0\i0 \cf4 \strokec4 ;\cb1 \
\cb3   \}\cb1 \
\cb3 \}\cb1 \
\pard\pardeftab720\sl360\partightenfactor0
\cf5 \cb3 \strokec5 function\cf4 \strokec4  
\f1\i \cf6 \strokec6 smoothScroll
\f0\i0 \cf7 \strokec7 ()\cf4 \strokec4  \{\cb1 \
\pard\pardeftab720\sl360\partightenfactor0
\cf4 \cb3   
\f1\i \cf9 \strokec9 document\cf5 \strokec5 .\cf6 \strokec6 querySelector
\f0\i0 \cf4 \strokec4 (\cf7 \strokec7 "\cf10 \strokec10 .booktable-section\cf7 \strokec7 "\cf4 \strokec4 )
\f1\i \cf5 \strokec5 .\cf6 \strokec6 scrollIntoView
\f0\i0 \cf4 \strokec4 (\{\cb1 \
\cb3     behavior: \cf7 \strokec7 "\cf10 \strokec10 smooth\cf7 \strokec7 "\cf16 \strokec16 ,\cf4 \cb1 \strokec4 \
\cb3   \});\cb1 \
\cb3 \}\cb1 \
\pard\pardeftab720\sl360\partightenfactor0
\cf5 \cb3 \strokec5 function\cf4 \strokec4  
\f1\i \cf6 \strokec6 bookTable
\f0\i0 \cf7 \strokec7 ()\cf4 \strokec4  \{\cb1 \
\pard\pardeftab720\sl360\partightenfactor0
\cf4 \cb3   \cf5 \strokec5 let
\f1\i  
\f0\i0 \cf8 \strokec8 phone_number
\f1\i \cf5 \strokec5  
\f0\i0 =
\f1\i  \cf9 \strokec9 document\cf5 \strokec5 .\cf6 \strokec6 getElementById
\f0\i0 \cf4 \strokec4 (\cf7 \strokec7 "\cf10 \strokec10 phone-number\cf7 \strokec7 "\cf4 \strokec4 )
\f1\i \cf5 \strokec5 .\cf11 \strokec11 value
\f0\i0 \cf4 \strokec4 ;\cb1 \
\cb3   \cf5 \strokec5 if\cf4 \strokec4  (
\f1\i \cf9 \strokec9 phone_number\cf5 \strokec5 .
\f0\i0 \cf9 \strokec9 length\cf4 \strokec4  \cf5 \strokec5 !==\cf4 \strokec4  \cf15 \strokec15 10\cf4 \strokec4 ) \{\cb1 \
\cb3     
\f1\i \cf6 \strokec6 alert
\f0\i0 \cf4 \strokec4 (\cf7 \strokec7 "\cf10 \strokec10 Kindly insert a valid phone number\cf7 \strokec7 "\cf4 \strokec4 );\cb1 \
\cb3   \} \cf5 \strokec5 else\cf4 \strokec4  \{\cb1 \
\cb3     
\f1\i \cf6 \strokec6 initiatePayment
\f0\i0 \cf4 \strokec4 (\cf8 \strokec8 phone_number\cf4 \strokec4 );\cb1 \
\cb3     
\f1\i \cf6 \strokec6 sendBookingEmail
\f0\i0 \cf4 \strokec4 ();\cb1 \
\cb3   \}\cb1 \
\cb3 \}\cb1 \
\pard\pardeftab720\sl360\partightenfactor0
\cf5 \cb3 \strokec5 function\cf4 \strokec4  
\f1\i \cf6 \strokec6 initiatePayment
\f0\i0 \cf7 \strokec7 (\cf8 \strokec8 phone_number\cf7 \strokec7 )\cf4 \strokec4  \{\cb1 \
\pard\pardeftab720\sl360\partightenfactor0
\cf4 \cb3   \cf5 \strokec5 let
\f1\i  
\f0\i0 \cf8 \strokec8 amount
\f1\i \cf5 \strokec5  
\f0\i0 =
\f1\i  
\f0\i0 \cf15 \strokec15 1\cf4 \strokec4 ;\cb1 \
\
\cb3   \cf5 \strokec5 const
\f1\i  \cf6 \strokec6 url\cf5 \strokec5  
\f0\i0 =
\f1\i  
\f0\i0 \cf7 \strokec7 "\cf10 \strokec10 https://us-central1-mneti-services.cloudfunctions.net/main/lnmo\cf7 \strokec7 "\cf4 \strokec4 ;\cb1 \
\cb3   \cf5 \strokec5 const
\f1\i  \cf6 \strokec6 options\cf5 \strokec5  
\f0\i0 =
\f1\i  
\f0\i0 \{\cf4 \cb1 \strokec4 \
\pard\pardeftab720\sl360\partightenfactor0

\f1\i \cf5 \cb3 \strokec5     mode
\f0\i0 :
\f1\i  
\f0\i0 \cf7 \strokec7 "\cf10 \strokec10 cors\cf7 \strokec7 "\cf16 \strokec16 ,\cf4 \cb1 \strokec4 \

\f1\i \cf5 \cb3 \strokec5     method
\f0\i0 :
\f1\i  
\f0\i0 \cf7 \strokec7 "\cf10 \strokec10 POST\cf7 \strokec7 "\cf16 \strokec16 ,\cf4 \cb1 \strokec4 \

\f1\i \cf5 \cb3 \strokec5     body
\f0\i0 :
\f1\i  
\f0\i0 \cf9 \strokec9 new
\f1\i \cf5 \strokec5  
\f0\i0 \cf18 \strokec18 URLSearchParams\cf4 \strokec4 (\cb1 \

\f1\i \cf5 \cb3 \strokec5       
\f0\i0 \cf4 \strokec4 `
\f1\i \cf10 \strokec10 phone_number=
\f0\i0 \cf19 \strokec19 $\{\cf8 \strokec8 phone_number\cf19 \strokec19 \}
\f1\i \cf10 \strokec10 &amount=
\f0\i0 \cf19 \strokec19 $\{\cf8 \strokec8 amount\cf19 \strokec19 \}
\f1\i \cf10 \strokec10 &email=''
\f0\i0 \cf4 \strokec4 `\cb1 \

\f1\i \cf5 \cb3 \strokec5     
\f0\i0 \cf4 \strokec4 )\cf16 \strokec16 ,\cf4 \cb1 \strokec4 \

\f1\i \cf5 \cb3 \strokec5     headers
\f0\i0 :
\f1\i  
\f0\i0 \{\cf4 \cb1 \strokec4 \

\f1\i \cf5 \cb3 \strokec5       
\f0\i0 \cf7 \strokec7 "\cf10 \strokec10 Content-Type\cf7 \strokec7 "\cf5 \strokec5 :
\f1\i  
\f0\i0 \cf7 \strokec7 "\cf10 \strokec10 application/x-www-form-urlencoded; charset=UTF-8\cf7 \strokec7 "\cf16 \strokec16 ,\cf4 \cb1 \strokec4 \

\f1\i \cf5 \cb3 \strokec5     
\f0\i0 \}\cf16 \strokec16 ,\cf4 \cb1 \strokec4 \

\f1\i \cf5 \cb3 \strokec5   
\f0\i0 \}\cf4 \strokec4 ;\cb1 \
\
\pard\pardeftab720\sl360\partightenfactor0
\cf4 \cb3   
\f1\i \cf6 \strokec6 fetch
\f0\i0 \cf4 \strokec4 (\cf8 \strokec8 url\cf16 \strokec16 ,\cf4 \strokec4  \cf8 \strokec8 options\cf4 \strokec4 )\cb1 \
\cb3     
\f1\i \cf5 \strokec5 .\cf6 \strokec6 then
\f0\i0 \cf4 \strokec4 (\cf7 \strokec7 (\cf8 \strokec8 res\cf7 \strokec7 )\cf4 \strokec4  \cf5 \strokec5 =>\cf4 \strokec4  
\f1\i \cf9 \strokec9 res\cf5 \strokec5 .\cf6 \strokec6 text
\f0\i0 \cf4 \strokec4 ())\cb1 \
\cb3     
\f1\i \cf5 \strokec5 .\cf6 \strokec6 then
\f0\i0 \cf4 \strokec4 (\cf7 \strokec7 (\cf8 \strokec8 text\cf7 \strokec7 )\cf4 \strokec4  \cf5 \strokec5 =>\cf4 \strokec4  \{\cb1 \
\cb3       
\f1\i \cf9 \strokec9 console\cf5 \strokec5 .\cf6 \strokec6 log
\f0\i0 \cf4 \strokec4 (\cf8 \strokec8 text\cf4 \strokec4 );\cb1 \
\cb3       
\f1\i \cf6 \strokec6 $
\f0\i0 \cf4 \strokec4 (\cf7 \strokec7 "\cf10 \strokec10 #bookModal\cf7 \strokec7 "\cf4 \strokec4 )
\f1\i \cf5 \strokec5 .\cf6 \strokec6 modal
\f0\i0 \cf4 \strokec4 (\cf7 \strokec7 "\cf10 \strokec10 hide\cf7 \strokec7 "\cf4 \strokec4 );\cb1 \
\cb3       
\f1\i \cf5 \strokec5 return
\f0\i0 \cf4 \strokec4  \cf8 \strokec8 text\cf4 \strokec4 ;\cb1 \
\cb3     \})\cb1 \
\cb3     
\f1\i \cf5 \strokec5 .\cf6 \strokec6 catch
\f0\i0 \cf4 \strokec4 (\cf7 \strokec7 (\cf8 \strokec8 err\cf7 \strokec7 )\cf4 \strokec4  \cf5 \strokec5 =>\cf4 \strokec4  \{\cb1 \
\cb3       
\f1\i \cf9 \strokec9 console\cf5 \strokec5 .\cf6 \strokec6 log
\f0\i0 \cf4 \strokec4 (`\cf10 \strokec10 Error with message: \cf19 \strokec19 $\{\cf8 \strokec8 err\cf19 \strokec19 \}\cf4 \strokec4 `);\cb1 \
\cb3       
\f1\i \cf6 \strokec6 $
\f0\i0 \cf4 \strokec4 (\cf7 \strokec7 "\cf10 \strokec10 #bookModal\cf7 \strokec7 "\cf4 \strokec4 )
\f1\i \cf5 \strokec5 .\cf6 \strokec6 modal
\f0\i0 \cf4 \strokec4 (\cf7 \strokec7 "\cf10 \strokec10 hide\cf7 \strokec7 "\cf4 \strokec4 );\cb1 \
\cb3     \});\cb1 \
\cb3 \}\cb1 \
\pard\pardeftab720\sl360\partightenfactor0
\cf5 \cb3 \strokec5 function\cf4 \strokec4  
\f1\i \cf6 \strokec6 sendBookingEmail
\f0\i0 \cf7 \strokec7 ()\cf4 \strokec4  \{\cb1 \
\pard\pardeftab720\sl360\partightenfactor0
\cf4 \cb3   \cf5 \strokec5 let
\f1\i  
\f0\i0 \cf8 \strokec8 seats
\f1\i \cf5 \strokec5  
\f0\i0 =
\f1\i  \cf9 \strokec9 document\cf5 \strokec5 .\cf6 \strokec6 getElementById
\f0\i0 \cf4 \strokec4 (\cf7 \strokec7 "\cf10 \strokec10 number_of_seats\cf7 \strokec7 "\cf4 \strokec4 );\cb1 \
\cb3   \cf5 \strokec5 let
\f1\i  
\f0\i0 \cf8 \strokec8 num_seats
\f1\i \cf5 \strokec5  
\f0\i0 =
\f1\i  \cf9 \strokec9 seats\cf5 \strokec5 .\cf11 \strokec11 options
\f0\i0 \cf4 \strokec4 [
\f1\i \cf9 \strokec9 seats\cf5 \strokec5 .\cf11 \strokec11 selectedIndex
\f0\i0 \cf4 \strokec4 ]
\f1\i \cf5 \strokec5 .\cf11 \strokec11 text
\f0\i0 \cf4 \strokec4 ;\cb1 \
\cb3   \cf5 \strokec5 let
\f1\i  
\f0\i0 \cf8 \strokec8 date_time
\f1\i \cf5 \strokec5  
\f0\i0 =
\f1\i  \cf9 \strokec9 document\cf5 \strokec5 .\cf6 \strokec6 getElementById
\f0\i0 \cf4 \strokec4 (\cf7 \strokec7 "\cf10 \strokec10 selectDateTime\cf7 \strokec7 "\cf4 \strokec4 )
\f1\i \cf5 \strokec5 .\cf11 \strokec11 value
\f0\i0 \cf4 \strokec4 ;\cb1 \
\
\cb3   \cf5 \strokec5 let
\f1\i  
\f0\i0 \cf8 \strokec8 templateParams
\f1\i \cf5 \strokec5  
\f0\i0 =
\f1\i  
\f0\i0 \{\cf4 \cb1 \strokec4 \
\pard\pardeftab720\sl360\partightenfactor0

\f1\i \cf5 \cb3 \strokec5     customer_name
\f0\i0 :
\f1\i  \cf9 \strokec9 localStorage\cf5 \strokec5 .\cf6 \strokec6 getItem
\f0\i0 \cf4 \strokec4 (\cf7 \strokec7 "\cf10 \strokec10 fullname\cf7 \strokec7 "\cf4 \strokec4 )\cf16 \strokec16 ,\cf4 \cb1 \strokec4 \

\f1\i \cf5 \cb3 \strokec5     to_email
\f0\i0 :
\f1\i  \cf9 \strokec9 localStorage\cf5 \strokec5 .\cf6 \strokec6 getItem
\f0\i0 \cf4 \strokec4 (\cf7 \strokec7 "\cf10 \strokec10 email\cf7 \strokec7 "\cf4 \strokec4 )\cf16 \strokec16 ,\cf4 \cb1 \strokec4 \

\f1\i \cf5 \cb3 \strokec5     date_time
\f0\i0 :
\f1\i  
\f0\i0 \cf8 \strokec8 date_time
\f1\i \cf5 \strokec5  
\f0\i0 +
\f1\i  
\f0\i0 \cf4 \strokec4 `
\f1\i \cf10 \strokec10  for a table of 
\f0\i0 \cf19 \strokec19 $\{\cf8 \strokec8 num_seats\cf19 \strokec19 \}\cf4 \strokec4 `\cf16 \strokec16 ,\cf4 \cb1 \strokec4 \

\f1\i \cf5 \cb3 \strokec5   
\f0\i0 \}\cf4 \strokec4 ;\cb1 \
\
\pard\pardeftab720\sl360\partightenfactor0
\cf4 \cb3   
\f1\i \cf9 \strokec9 console\cf5 \strokec5 .\cf6 \strokec6 log
\f0\i0 \cf4 \strokec4 (\cf8 \strokec8 templateParams\cf4 \strokec4 );\cb1 \
\
\cb3   
\f1\i \cf9 \strokec9 emailjs\cf5 \strokec5 .\cf6 \strokec6 send
\f0\i0 \cf4 \strokec4 (\cf7 \strokec7 "\cf10 \strokec10 service_0asll6m\cf7 \strokec7 "\cf16 \strokec16 ,\cf4 \strokec4  \cf7 \strokec7 "\cf10 \strokec10 template_I0BKQduf\cf7 \strokec7 "\cf16 \strokec16 ,\cf4 \strokec4  \cf8 \strokec8 templateParams\cf4 \strokec4 )
\f1\i \cf5 \strokec5 .\cf6 \strokec6 then
\f0\i0 \cf4 \strokec4 (\cb1 \
\cb3     \cf5 \strokec5 function\cf4 \strokec4  \cf7 \strokec7 (\cf8 \strokec8 response\cf7 \strokec7 )\cf4 \strokec4  \{\cb1 \
\cb3       
\f1\i \cf9 \strokec9 console\cf5 \strokec5 .\cf6 \strokec6 log
\f0\i0 \cf4 \strokec4 (\cf7 \strokec7 "\cf10 \strokec10 SUCCESS!\cf7 \strokec7 "\cf16 \strokec16 ,\cf4 \strokec4  
\f1\i \cf9 \strokec9 response\cf5 \strokec5 .
\f0\i0 \cf11 \strokec11 status\cf16 \strokec16 ,\cf4 \strokec4  
\f1\i \cf9 \strokec9 response\cf5 \strokec5 .
\f0\i0 \cf11 \strokec11 text\cf4 \strokec4 );\cb1 \
\cb3     \}\cf16 \strokec16 ,\cf4 \cb1 \strokec4 \
\cb3     \cf5 \strokec5 function\cf4 \strokec4  \cf7 \strokec7 (\cf8 \strokec8 error\cf7 \strokec7 )\cf4 \strokec4  \{\cb1 \
\cb3       
\f1\i \cf9 \strokec9 console\cf5 \strokec5 .\cf6 \strokec6 log
\f0\i0 \cf4 \strokec4 (\cf7 \strokec7 "\cf10 \strokec10 FAILED...\cf7 \strokec7 "\cf16 \strokec16 ,\cf4 \strokec4  \cf8 \strokec8 error\cf4 \strokec4 );\cb1 \
\cb3     \}\cb1 \
\cb3   );\cb1 \
\cb3 \}\cb1 \
\
}