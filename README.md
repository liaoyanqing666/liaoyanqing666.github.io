# Create your own website （siyuanli.tech）

Hi, I'm Siyuan Li (黎思源), and this is the repo of my personal website, which also serves as my resume. I'm glad you found my website, and welcome!

This html and css is completely original with the help of AI, optimized for my individual needs. I also welcome you to use this as a template for your own personal website to fork, don't forget star!

Feel free to fork this repository and modify it to suit your needs! If you're looking to build your own personal website or resume page, this can serve as a great starting point.

Following I will introduce how to create your own website from zero, both in **English and Chinese**.

## How to create your own website from zero? (English)

### Fork this Repository

You can fork this repository to create your own website, or clone it to your local machine for modification.

1. Find and click the **Fork** button at the top-right corner of this page.
2. On the new page, fill in the **Repository name** field with "`your GitHub username.github.io`". For example, if your username is **ABC123**, the repository name should be "`ABC123.github.io`".
3. No other options need to be changed, and the **Description** can be filled in based on your personal preference.

### Modify the Content

Once you've forked the repository, you'll see several files, including `index.html`, `styles.css`, and other important files. These are the files you'll need to edit to customize your website.

- **index.html**: This is the main content file of the website. When someone opens your website, this is the content that will be displayed. You can edit the text and images here to personalize your website.
- **styles.css**: This file controls the website's appearance and layout (e.g., background colors, font sizes, spacing). If you're satisfied with the default layout, you can skip modifying this file.
- **404.html**: This file defines the content that appears when someone tries to visit a page on your website that doesn't exist.
- **game.html**: This is a small Easter egg game I included. You can choose to keep it or remove it.
- **LICENSE**: This file contains the open-source license for the website. You don't need to modify it, but you can replace it with a more permissive MIT license if desired.
- **CNAME**: This file is used to link a custom domain. **Be sure to delete this file** if you're not using a custom domain. To delete it, open the file, click the three dots in the top-right corner, and select **Delete file**.
- **track-visitors.js**: This file is used to record who visited the site and the recorded data is currently sent to the project author's database, be sure to **delete this file**.

### Edit the Content

1. After cloning the repository locally, it's recommended to use **Visual Studio Code (VSCode)** for editing.
2. Install the **Live Server** extension for VSCode to preview your changes in real-time.
3. Once you finish editing the `index.html` and other files, commit and push the changes back to your GitHub repository.
4. Remember to delete the entire `track-visitors.js` file, otherwise your website visitor record will be received by me.

### Deploy Your Website

1. After finishing your edits and committing your changes, go to the GitHub repository page and click the **Settings** tab at the top.
   
2. In the left-hand menu, find and click **Pages**.
   
3. When the part you want to edit is not in `index.html` (for example, the part where you want to create a *Patents*), you copy the part that is closest in style (for example, the *Papers* section). Be careful not to change the original `class` name. (This will keep the original style)

   For example:
   ```html
    <section>
        <h2>📚 Patents</h2>
        <div class="papers-item"> <!-- The class name should not be modified -->
            <div class="details"> <!-- The class name should not be modified -->
                <h3>This is the name of a patent.</p>
            </div>
            <div class="content"> <!-- The class name should not be modified -->
                <ul>
                    <li>This is something else you want to display.</li>
                </ul>
            </div>
        </div>
   ```

    This way, you can add a new *Patents* section to your webpage.

4. In the **Branch** section, change the option from **None** to the `main` branch and save.
   
5. Wait a few seconds to a few minutes. After refreshing the **Pages** settings page, you'll see a URL at the top. This is the link to your newly created personal website.

### Congratulations! Your Website is Successfully Deployed!


## 如何从零开始创建自己的网站 (Chinese)

如果是纯小白，可以通过[这个网址](https://blog.csdn.net/m0_61718615/article/details/142624599)访问带图版，并且步骤描写更为详细（包含无代码的办法）。

### Fork 这个仓库

您可以通过 fork 本仓库来创建自己的网站，也可以将其克隆到本地机器进行修改。

1. 找到并点击本页右上角的 **Fork** 按钮。
2. 在新的页面中，**Repository name** 处填写 "`你的 GitHub 用户名.github.io`"，例如您的账户名为 **ABC123**，则填写 "`ABC123.github.io`"。
3. 其他选项无需更改，**Description** 可根据个人情况填写。

### 修改具体内容

fork 仓库后，您会看到多个文件，包括 `index.html`、`styles.css` 以及其他关键文件。这些是您需要编辑以自定义网站内容的文件。

- **index.html**: 这是网站主页的内容文件，打开网址后显示的就是该文件中的内容。您可以在这里自定义网站的文字和图片。
- **styles.css**: 该文件控制网站的样式与外观（例如背景颜色、文字大小、排版等）。如果您对默认样式没有太大需求，可以跳过修改。
- **404.html**: 当用户访问您网站中不存在的页面时，这个文件定义了出现的内容。
- **game.html**: 这是我添加的一个小彩蛋游戏，您可以选择保留或删除。
- **LICENSE**: 包含网站的开源许可条款，无需更改，也可以替换为更加开放的 MIT 协议。
- **CNAME**: 这个文件用于关联自定义域名，如果不需要自定义域名，**请务必删除**。操作步骤为：打开该文件，点击页面右上角的“三个点”图标，选择 **Delete file**。
- **track-visitors.js**: 这个文件用于记录谁访问了这个网站，目前是发送到此项目作者的数据库，尽量**删除这个文件**。

### 编辑内容

1. 克隆仓库到本地后，建议使用 **Visual Studio Code (VSCode)** 进行编辑。
   
2. 您可以安装 VSCode 的 **Live Server 插件**，实时预览您编辑后的页面效果。
   
3. 当您希望编辑的部分不在 `index.html` 中时（例如您想要创建一个 *Patents（专利）* 的部分），您科研直接复制样式上最接近的部分（例如 *Papers* 部分）进行修改。注意，不要修改原本的 `class` 的名称。（这样才能保留原先的样式）

   例如：
   ```html
    <section>
        <h2>📚 Patents</h2>
        <div class="papers-item"> <!-- class 的内容不要修改 -->
            <div class="details"> <!-- class 的内容不要修改 -->
                <h3>This is the name of a patent.</p>
            </div>
            <div class="content"> <!-- class 的内容不要修改 -->
                <ul>
                    <li>This is something else you want to display.</li>
                </ul>
            </div>
        </div>
   ```

   这样就可以在网页中添加一个新的 *Patents* 部分。

4. 修改完 `index.html` 和其他文件后，将更改提交并推送到您的 GitHub 仓库。

5. 切记**整个删除**`track-visitors.js`文件，否则你的网站访客记录会被我全部收到。

### 部署网站

1. 编辑完成并提交后，前往 GitHub 项目页面，点击上方的 **Settings**。
2. 在左侧菜单中找到 **Pages** 并点击进入。
3. 在 **Branch** 选项处，将 **None** 改为 `main` 分支并保存。
4. 保存后等待几秒到几分钟，刷新页面，您将会看到页面顶部显示了一个网址，这个网址就是您的个人网站地址。

### 恭喜！您的网站已经成功搭建完成！

### If you have any question of the code, please contact me or leave an issue. My email:1793706453@qq.com

