
'use client';

import { Sidebar } from 'flowbite-react';
import { HiArrowSmRight, HiChartPie, HiInbox, HiShoppingBag, HiTable, HiUser } from 'react-icons/hi';
import { FaStripe, FaGithub, FaShopify, FaTelegramPlane   } from "react-icons/fa";
import { LiaStripeS } from "react-icons/lia";
import { RiOpenaiFill } from "react-icons/ri";
import { HiOutlineRocketLaunch } from "react-icons/hi2";
import { SlPaypal } from "react-icons/sl";
import { Link } from 'react-router-dom';

function SB() {
  return (
    <Sidebar >
      <Sidebar.Items>
        <Sidebar.ItemGroup>
            <h2 className="text-lg font-semibold text-gray-800 dark:text-white">Modules</h2>
          <Sidebar.Item href="/" icon={HiChartPie}>
            Meta
          </Sidebar.Item>
          <Link to="/stripe">
          <Sidebar.Item href="/stripe" icon={LiaStripeS}>
            Stripe
          </Sidebar.Item>
          </Link>
          <Link to="/github">
          <Sidebar.Item href="/github" icon={FaGithub}>
            Github
          </Sidebar.Item>
          </Link>
          <Link to="/shopify">
          <Sidebar.Item href="/shopify" icon={FaShopify}>
            Shopify
          </Sidebar.Item>
          </Link>
          <Link to="/telegram">
          <Sidebar.Item href="/telegram" icon={FaTelegramPlane}>
            Telegram
          </Sidebar.Item>
          </Link>
          <Link to="/openai">
          <Sidebar.Item href="/openai" icon={RiOpenaiFill}>
            OpenAI
          </Sidebar.Item>
          </Link>
          <Link to="/paystack">
          <Sidebar.Item href="/paystack" icon={HiInbox}>
            Paystack
          </Sidebar.Item>
          </Link>
          <Link to="/omnisend">
          <Sidebar.Item href="/omnisend" icon={HiInbox}>
            Omnisend
          </Sidebar.Item>
          </Link>
          <Link to="/launchdarkly">
          <Sidebar.Item href="/launchdarkly" icon={HiOutlineRocketLaunch}>
            LaunchDarkly
          </Sidebar.Item>
          </Link>
          <Link to="/clearbit">
          <Sidebar.Item href="/clearbit" icon={HiInbox}>
            Clearbit
          </Sidebar.Item>
          </Link>
          <Link to="/paypal">
          <Sidebar.Item href="/paypal" icon={SlPaypal}>
            Paypal
          </Sidebar.Item>
          </Link>
        </Sidebar.ItemGroup>
      </Sidebar.Items>
    </Sidebar>
  );
}

export default SB;