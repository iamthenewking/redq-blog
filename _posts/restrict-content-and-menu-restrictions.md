---
title: "Registration Settings: Restrict Content and Menu Restrictions by UserPlace Plugin"
date: "2018-10-24"
category: "Article, Plugin"
excerpt: "Hello and Welcome to another article series of UserPlace a complete free WordPress membership plugin. This time the article is about the registry settings for your users. The Content restriction process of your site and also about the Menu restrictions process for your users. Registration Settings  By default, WordPress disables the registration process in the site. You"
coverImage: "https://d2qklehrvrfpx7.cloudfront.net/blog-preview/28.png"
ogImage:
  url: "https://d2qklehrvrfpx7.cloudfront.net/blogimages/userplace.png"
---

Hello and Welcome to another article series of [UserPlace](https://redq.io/userplace) a complete [free WordPress membership plugin](https://redq.io/blog/userplace-free-wordpress-membership-plugin/).

This time the article is about the registry settings for your users. The Content restriction process of your site and also about the Menu restrictions process for your users.
[![cartsy-banner](https://d2qklehrvrfpx7.cloudfront.net/blogimages/cartsy-banner.jpg)](https://bit.ly/cartsyTheme)

**Registration Settings**

By default, [WordPress](https://wordpress.org/plugins/userplace-member-subscription-restriction-payments/) disables the registration process in the site. You can enable this feature if you want to allow your users for registration.

In the register page along with our shortcode, users will see something like the screenshot below. Registering new users is currently not allowed. But don't be afraid, you can enable it any time with clicking the simple checkbox. We have a shortcode for the registration settings named **\[userplace\_**_**register**_**\_form\].**

![](https://d2qklehrvrfpx7.cloudfront.net/blogimages/userplace-1.png)

In the WordPress admin panel, there is a Settings Menu. Click the **Settings> General.** There is a label called **Membership** and on the right side of it, there is a checkbox labeled with **Anyone can register**. Click the checkbox icon and click save. Now your users can see the registration form and they can join your site at any time.

If this setting is not enabled, then our shortcode **\[userplace\_**_**register**_**\_form\]** won't work, and users will not be able to register into your website.

![userplace register form](https://d2qklehrvrfpx7.cloudfront.net/blogimages/userplace-2.png "userplace register form")

**Content Restrictions Shortcode**

The shortcode is used to restrict content for the member of different plans. If you want to restrict some contents of your post from specific members of your site, you can do that using this shortcode.

> `[restrict_content restricted_plans_id="commaa seperated plan id"] Your content to restrict [/restrict_content]`

**NB: Here plan id will be is of the plan which you created in your gateway settings.**

If the content is restricted, then the user will see something like that

![content is restricted](https://d2qklehrvrfpx7.cloudfront.net/blogimages/userplace-3.png "content is restricted")

**Menu Restriction**

Public menu level restriction control is very easy to use. You can navigate to the wp-admin dashboard and then you can add the menu page with view level restriction.

**Who can see this menu link?**

You can specify the menu settings for Everyone, logged in or logged out users.

**Restricted Roles**

- For the logged in users, you can also restrict the menu access for user current plan.

![Restricted Roles](https://d2qklehrvrfpx7.cloudfront.net/blogimages/userplace-4.png "Restricted Roles")

Here is the preview screenshot for a simple user registration page. This page is made with one of our shortcode **\[userplace_register_form\]**. Add this shortcode to a page and then in the menu select only for logged out users.

Then in your main menu area, it will show up for new user register into your site.

![userplace register form](https://d2qklehrvrfpx7.cloudfront.net/blogimages/userplace-5.png "userplace register form")This is the public view for the member register shortcode page and only visible in not logged in users.

So, how simple is that ?? The menu restrictions and content restrictions process are very essential for your membership site. That's why we made it in a simple way.

<a href="https://wordpress.org/plugins/userplace-member-subscription-restriction-payments/" class="btn">Free Download</a>

**UserPlace Article Series**

- UserPlace Intro[: Intro To UserPlace – A Complete Free WordPress Membership Plugin](https://redq.io/blog/userplace-wordpress-membership-plugin-free/)
- UserPlace Coupon: [How To Setup Coupon In Your Membership Site With UserPlace Plugin](https://redq.io/blog/userplace-setup-coupon-user-role-and-menu-restrictions-on-your-membership-site/)
- Stripe Setup: [UserPlace Plugin – Setup Payment Gateway For Your Membership Site](https://redq.io/blog/membership-plugin-with-payment-gateways/)
- Plan Creation[: Plan Creations And Restrictions In Membership Site Using UserPlace Plugin](https://redq.io/blog/membership-plugin-with-payment-gateways/)
