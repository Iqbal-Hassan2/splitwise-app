import React from "react";
import { all_images } from "../../assets/all_images";
export function CenterContent() {
  return (
    <>
      <div className="lg:flex lg:flex-wrap">
        <div className="bg-facets w-full text-white pt-8 bg-charcoal lg:h-landing-feature lg:w-1/2">
          <div className="flex flex-col align-center justify-between h-full">
            <div>
              <h1 className="text-2xl text-center font-mont">Track balances</h1>
              <p className="text-center block mx-auto px-8 mt-2 text-lg mb-9 max-w-95">
                Keep track of shared expenses, balances, and who owes who.
              </p>
            </div>
            <img src={all_images.asset1} className="mx-auto w-65 lg:w-81" />
          </div>
        </div>
        <div className="bg-facets w-full text-white pt-8 bg-teal h-sm-landing-feature lg:h-landing-feature lg:w-1/2">
          <div className="flex flex-col align-center justify-between h-full">
            <div>
              <h1 className="text-2xl text-center">Organize expenses</h1>
              <p className="text-center block mx-auto px-8 mt-2 text-lg mb-9 max-w-95">
                Split expenses with any group: trips, housemates, friends, and
                family.
              </p>
            </div>
            <img src={all_images.asset2} className="mx-auto w-65 lg:w-81" />
          </div>
        </div>
        <div className="bg-facets w-full text-white pt-8 bg-orange lg:h-landing-feature lg:w-1/2">
          <div className="flex flex-col align-center justify-between h-full">
            <div>
              <h1 className="text-2xl text-center">Add expenses easily</h1>
              <p className="text-center block mx-auto px-8 mt-2 text-lg mb-9 max-w-95">
                Quickly add expenses on the go before you forget who paid.
              </p>
            </div>
            <img src={all_images.asset3} className="mx-auto w-65 lg:w-81" />
          </div>
        </div>
        <div className="bg-facets w-full text-white pt-8 bg-charcoal lg:h-landing-feature lg:w-1/2">
          <div className="flex flex-col align-center justify-between h-full">
            <div>
              <h1 className="text-2xl text-center">Pay friends back</h1>
              <p className="text-center block mx-auto px-8 mt-2 text-lg mb-9 max-w-95">
                Settle up with a friend and record any cash or online payment.
              </p>
            </div>
            <img src={all_images.asset4} className="mx-auto w-65 lg:w-81" />
          </div>
        </div>

        <div className="bg-facets w-full text-white pt-8 h-landing-feature bg-purple flex-col lg:flex-row flex justify-between lg:flex">
          <div className="lg:w-1/2">
            <div className="lg:flex lg:flex-col lg:justify-center lg:h-full">
              <h1 className="text-2xl text-center">Get even more with PRO</h1>
              <p className="text-center block mx-6 mt-2 text-lg mb-6 max-w-95 mx-auto">
                Get even more organized with receipt scanning, charts and
                graphs, currency conversion, and more!
              </p>
              <div className="flex justify-center  mb-4">
                <a
                  className="mx-auto px-10 py-3 bg-charcoal-trans border border-white shadow text-white font-mont font-semibold rounded sm-cta-button"
                  href="/signup"
                >
                  Sign up
                </a>
              </div>
            </div>
          </div>
          <div className="lg:w-1/2">
            <div className="lg:flex lg:flex-col lg:justify-end lg:h-full">
              <img src={all_images.asset5} className="w-65 lg:w-81 mx-auto" />
            </div>
          </div>
        </div>
      </div>
      <div className="container mx-auto text-charcoal px-8">
        <h1 className="text-center mt-10 text-2xl lg:text-3.5xl lg:mb-12 lg:mt-24">
          The whole nine yards
        </h1>
        <ul className="feature-list col-2 md:col-3 text-sm mt-4 mx-auto">
          <li>
            <div>
              <i className="core-icon" />
              <span>Add groups and friends</span>
            </div>
          </li>
          <li>
            <div>
              <i className="core-icon" />
              <span>Split expenses, record debts</span>
            </div>
          </li>
          <li>
            <div>
              <i className="core-icon" />
              <span>Equal or unequal splits</span>
            </div>
          </li>
          <li>
            <div>
              <i className="core-icon" />
              <span>Split by % or shares</span>
            </div>
          </li>
          <li>
            <div>
              <i className="core-icon" />
              <span>Calculate total balances</span>
            </div>
          </li>
          <li>
            <div>
              <i className="core-icon" />
              <span>Suggested repayments</span>
            </div>
          </li>
          <li>
            <div>
              <i className="core-icon" />
              <span>Simplify debts</span>
            </div>
          </li>
          <li>
            <div>
              <i className="core-icon" />
              <span>Recurring expenses</span>
            </div>
          </li>
          <li>
            <div>
              <i className="core-icon" />
              <span>Offline mode</span>
            </div>
          </li>
          <li>
            <div>
              <i className="core-icon" />
              <span>Cloud sync</span>
            </div>
          </li>
          <li>
            <div>
              <i className="core-icon" />
              <span>Spending totals</span>
            </div>
          </li>
          <li>
            <div>
              <i className="core-icon" />
              <span>Categorize expenses</span>
            </div>
          </li>
          <li>
            <div>
              <i className="core-icon" />
              <span>Easy CSV exports</span>
            </div>
          </li>
          <li>
            <div>
              <i className="core-icon" />
              <span>7+ languages</span>
            </div>
          </li>
          <li>
            <div>
              <i className="core-icon" />
              <span>100+ currencies</span>
            </div>
          </li>
          <li>
            <div>
              <i className="core-icon" />
              <span>Payment integrations</span>
            </div>
          </li>
          <li>
            <div>
              <i className="pro-icon" />
              <span>A totally ad-free experience</span>
            </div>
          </li>
          <li>
            <div>
              <i className="pro-icon" />
              <span>Currency conversion</span>
            </div>
          </li>
          <li>
            <div>
              <i className="pro-icon" />
              <span>Receipt scanning</span>
            </div>
          </li>
          <li>
            <div>
              <i className="pro-icon" />
              <span>Itemization</span>
            </div>
          </li>
          <li>
            <div>
              <i className="pro-icon" />
              <span>Charts and graphs</span>
            </div>
          </li>
          <li>
            <div>
              <i className="pro-icon" />
              <span>Expense search</span>
            </div>
          </li>
          <li>
            <div>
              <i className="pro-icon" />
              <span>Save default splits</span>
            </div>
          </li>
          <li>
            <div>
              <i className="pro-icon" />
              <span>Early access to new features</span>
            </div>
          </li>
        </ul>
        <div className="flex items-center justify-center text-xs mt-8">
          <i className="core-icon" />
          <span className="ml-1 mr-6 text-charcoal lg:text-xl">
            Core features
          </span>
          <i className="pro-icon" />
          <span className="ml-2 text-purple-light lg:text-xl">
            Pro features
          </span>
        </div>
      </div>
      <div className="container mx-auto mt-16 px-8">
        <div className="flex flex-wrap md:-mx-2">
          <div className="md:w-1/2 md:px-2 lg:w-1/3">
            <a
              href="https://www.ft.com/content/8ccd6f0e-18bb-11e9-b93e-f4351a53f1c3"
              target="_blank"
            >
              <div className="border border-grey-lightest shadow rounded pt-7.5 px-6 pb-4 w-full mb-4 h-small-card lg:h-lg-card flex-col flex justify-between external-link">
                <p className="text-lg font-mont">
                  “Fundamental” for tracking finances. As good as WhatsApp for
                  containing awkwardness.
                </p>
                <div className="flex items-center h-12">
                  <img src={all_images.ft} className="h-12 w-12 rounded mr-4" />
                  <span className="italic text-lg">Financial Times</span>
                </div>
              </div>
            </a>
          </div>
          <div className="md:w-1/2 md:px-2 lg:w-1/3">
            <div className="border border-grey-lightest shadow rounded pt-7.5 px-6 pb-4 w-full mb-4 h-small-card lg:h-lg-card flex-col flex justify-between external-link">
              <p className="text-lg font-mont">
                Life hack for group trips. Amazing tool to use when traveling
                with friends! Makes life so easy!!
              </p>
              <div className="flex items-center h-12">
                <span className="italic text-lg">Ahah S, iOS</span>
              </div>
            </div>
          </div>

          <div className="md:w-1/2 md:px-2 lg:w-1/3">
            <a
              href="https://www.nytimes.com/2018/08/28/smarter-living/money-finance-apps-tools.html"
              target="_blank"
            >
              <div className="border border-grey-lightest shadow rounded pt-7.5 px-6 pb-4 w-full mb-4 h-small-card lg:h-lg-card flex-col flex justify-between external-link ">
                <p className="text-lg font-mont">
                  Makes it easy to split everything from your dinner bill to
                  rent.
                </p>
                <div className="flex items-center h-12">
                  <img
                    src={all_images.nyt}
                    className="h-12 w-12 rounded mr-4"
                  />
                  <span className="italic text-lg">NY Times</span>
                </div>
              </div>
            </a>
          </div>
          <div className="md:w-1/2 md:px-2 lg:w-1/3">
            <div className="border border-grey-lightest shadow rounded pt-7.5 px-6 pb-4 w-full mb-4 h-small-card lg:h-lg-card flex-col flex justify-between external-link ">
              <p className="text-lg font-mont">
                So amazing to have this app manage balances and help keep money
                out of relationships. love it!
              </p>
              <div className="flex items-center h-12">
                <span className="italic text-lg">Haseena C, Android</span>
              </div>
            </div>
          </div>
          <div className="md:w-1/2 md:px-2 lg:w-1/3">
            <a
              href="https://www.businessinsider.com.au/best-apps-for-splitting-expenses-friends-2017-3"
              target="_blank"
            >
              <div className="border border-grey-lightest shadow rounded pt-7.5 px-6 pb-4 w-full mb-4 h-small-card lg:h-lg-card flex-col flex justify-between external-link">
                <p className="text-lg font-mont">
                  I never fight with roommates over bills because of this genius
                  expense-splitting app
                </p>
                <div className="flex items-center h-12">
                  <img src={all_images.bi} className="h-12 w-12 rounded mr-4" />
                  <span className="italic text-lg">Business Insider</span>
                </div>
              </div>
            </a>
          </div>
          <div className="md:w-1/2 md:px-2 lg:w-1/3">
            <div className="border border-grey-lightest shadow rounded pt-7.5 px-6 pb-4 w-full mb-4 h-small-card lg:h-lg-card flex-col flex justify-between external-link">
              <p className="text-lg font-mont">
                I use it everyday. I use it for trips, roommates, loans. I love
                splitwise.
              </p>
              <div className="flex items-center h-12">
                <span className="italic text-lg">Trickseyus, iOS</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
