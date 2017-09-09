
# React Table Component Tutorial

This is the React table component fork from [the React tutorial](http://facebook.github.io/react/docs/tutorial.html).

## How to run this demo ?

There are several simple server implementations included. Just use the node server as example:

Firstly, run this command on the linux: (precondition: your system has node command) 
```sh
npm install
node server.js
```


Secondly visit <http://localhost:3001/>.

## How to operate this table component ?

This table component has implemented CRUD operations on local database(a.k just a global variable),

so we just need to following these steps which almost out of box:

### 1. Add operation

Click the `Add` button, and it will toggle a frame:

![](http://blogimages2016.oss-cn-hangzhou.aliyuncs.com/reactTable/home.png)

Then enter the string in these two input boxes what you want, obviously I 
assume you will enter the right string.(i.e I don`t check what you input)

![](http://blogimages2016.oss-cn-hangzhou.aliyuncs.com/react/Add2png.png)

Then click the `submit` button to post your new item to local database.

and the result will be like this:

![](http://blogimages2016.oss-cn-hangzhou.aliyuncs.com/reactTable/Add3.png)

### 2. Edit operation

Before click the `edit` button you should select one item(Only one item,
if you select one more items or 0 item, it will report a tips.)

Tips:

![](http://blogimages2016.oss-cn-hangzhou.aliyuncs.com/reactTable/EditError.png)

![](http://blogimages2016.oss-cn-hangzhou.aliyuncs.com/reactTable/EditError1.png)

When you operate it rightly, it also will toggle a frame, and the two 
input boxes will carry with the information which you has selected. 

![](http://blogimages2016.oss-cn-hangzhou.aliyuncs.com/reactTable/Edit1.png)

Then you can modify them and post the new result to local database:

![](http://blogimages2016.oss-cn-hangzhou.aliyuncs.com/reactTable/Edit2.png)

result will appear in the table at the same time:

![](http://blogimages2016.oss-cn-hangzhou.aliyuncs.com/reactTable/Edit3.png)

### 3. Delete operation

Before click the `delete` button, you also should be select one more
items to delete. just like this:

![](http://blogimages2016.oss-cn-hangzhou.aliyuncs.com/reactTable/Delete.png)

If you has selected nothing, no action will be taken.

then the table will be like this:

![](http://blogimages2016.oss-cn-hangzhou.aliyuncs.com/reactTable/Delete2.png)

### 4. Search operation

you can use the search input to search what you want, and no matter what 
you enter, the table will find your string in the `fruitName` and `color`
 columns, if it is, it will display like this:
 
 ![](http://blogimages2016.oss-cn-hangzhou.aliyuncs.com/reactTable/search.png)
 
 or, display nothing.

## Issue or Bugs

If you has found some issues or bugs, don`t hesitate to contact me!

Thanks in advance.
