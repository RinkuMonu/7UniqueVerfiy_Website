import type React from "react";
import SEO from "../Helmet/helment";
import { useContext } from "react";
import { ContextData } from "../../config/context";
import { SEOData } from "../../type";

const APICatalogPage: React.FC = () => {
    const { seo } = useContext(ContextData) as { seo: SEOData };
    return (
        <>
            <SEO seo={seo} />
            <main className="w-full mx-auto ">
                <section
                    className="w-full bg-cover bg-center min-h-screen flex items-center px-6 sm:px-10 md:px-16 lg:px-20 xl:px-24 pb-24"
                    style={{ backgroundImage: "url('/img/bg (2).png')" }}
                >
                    <div className="container mx-auto px-4 py-10 flex flex-col md:flex-row items-center justify-between gap-12">
                        <div className="w-full md:w-2/3 text-white">
                            <h1 className="text-4xl md:text-5xl font-bold mb-6">
                                Verify Bank Accounts in Real-Time with Accuracy and Confidence
                            </h1>
                            <h2 className="text-xl md:text-2xl font-semibold mb-6 text-[#f6fbfc]">
                                Ensure account ownership, prevent fraud, and streamline your
                                financial operations using our Bank Account Verification APIs.
                            </h2>
                            <p className="text-lg mb-4 text-white">
                                Our comprehensive Bank Account Verification API enables instant
                                validation of bank account details across all major Indian banks,
                                ensuring secure and accurate financial transactions.
                            </p>
                            <p className="mb-4 text-white">
                                From penny drop verification to penny-less validation, we offer
                                multiple verification methods to suit your business needs and
                                budget requirements.
                            </p>
                            <p className="mb-6 text-white">
                                Trusted by fintech companies, e-commerce platforms, and financial
                                institutions to reduce failed payouts, prevent fraud, and enhance
                                customer trust through reliable account verification.
                            </p>
                            <div className="flex flex-col sm:flex-row gap-4">
                                <a
                                    href="#"
                                    className="inline-block bg-[#b7603d] text-white font-semibold px-6 py-3 rounded shadow hover:bg-[#d19983] transition-colors text-center"
                                >
                                    Get Started
                                </a>
                                <a
                                    href="#"
                                    className="inline-block bg-transparent border-2 border-white text-white font-semibold px-6 py-3 rounded hover:bg-white hover:text-[#b7603d] transition-colors text-center"
                                >
                                    View API Docs
                                </a>
                            </div>
                        </div>
                        <div className="w-full md:w-1/2 flex justify-center">
                            <img
                                src="../img/images/5.png"
                                alt="Bank Account Verification"
                                className="w-full h-auto object-contain max-w-[500px] md:max-w-[600px] lg:max-w-[700px]"
                            />
                        </div>
                    </div>
                </section>

                {/* Use Cases Section - Where Can You Use It? */}
                <section className="bg-white py-16 px-4 md:px-8 lg:px-20">
                    <div className="w-full mx-auto">
                        <h2 className="text-3xl md:text-4xl font-bold text-gray-800 text-center mb-12">
                            Where Can You Use{" "}
                            <span className="text-[#b7603d]">Bank Account Verification</span>?
                        </h2>
                        <div className="grid gap-8 grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
                            <div className="bg-gradient-to-br from-blue-50 to-blue-100 p-6 rounded-lg text-center hover:shadow-lg transition-shadow">
                                <div className="text-4xl mb-4">🏦</div>
                                <h3 className="text-lg font-semibold mb-2 text-gray-800">
                                    Fintech / Lending
                                </h3>
                                <p className="text-gray-600 text-sm mb-3">
                                    Verify borrower accounts before loan disbursal to ensure
                                    accurate fund transfers.
                                </p>
                                <div className="text-xs text-[#b7603d]   font-medium">
                                    "Avoid failed loan disbursals!"
                                </div>
                            </div>
                            <div className="bg-gradient-to-br from-green-50 to-green-100 p-6 rounded-lg text-center hover:shadow-lg transition-shadow">
                                <div className="text-4xl mb-4">🛒</div>
                                <h3 className="text-lg font-semibold mb-2 text-gray-800">
                                    E-commerce
                                </h3>
                                <p className="text-gray-600 text-sm mb-3">
                                    Validate seller and customer accounts for refunds, settlements,
                                    and marketplace payments.
                                </p>
                                <div className="text-xs text-[#b7603d]   font-medium">
                                    "Streamline seller settlements!"
                                </div>
                            </div>
                            <div className="bg-gradient-to-br from-purple-50 to-purple-100 p-6 rounded-lg text-center hover:shadow-lg transition-shadow">
                                <div className="text-4xl mb-4">💼</div>
                                <h3 className="text-lg font-semibold mb-2 text-gray-800">
                                    Payroll Systems
                                </h3>
                                <p className="text-gray-600 text-sm mb-3">
                                    Verify employee bank accounts to ensure accurate salary payments
                                    and avoid bounced transfers.
                                </p>
                                <div className="text-xs text-[#b7603d] font-medium">
                                    "Avoid failed payouts in payrolls!"
                                </div>
                            </div>
                            <div className="bg-gradient-to-br from-orange-50 to-orange-100 p-6 rounded-lg text-center hover:shadow-lg transition-shadow">
                                <div className="text-4xl mb-4">🎮</div>
                                <h3 className="text-lg font-semibold mb-2 text-gray-800">
                                    Gaming / Fantasy Apps
                                </h3>
                                <p className="text-gray-600 text-sm mb-3">
                                    Verify user accounts for prize money withdrawals and ensure
                                    legitimate winners.
                                </p>
                                <div className="text-xs text-orange-600 font-medium">
                                    "Secure gaming withdrawals!"
                                </div>
                            </div>
                            <div className="bg-gradient-to-br from-red-50 to-red-100 p-6 rounded-lg text-center hover:shadow-lg transition-shadow">
                                <div className="text-4xl mb-4">🏥</div>
                                <h3 className="text-lg font-semibold mb-2 text-gray-800">
                                    Insurance
                                </h3>
                                <p className="text-gray-600 text-sm mb-3">
                                    Validate policyholder accounts for claim settlements and premium
                                    refunds.
                                </p>
                                <div className="text-xs text-red-600 font-medium">
                                    "Faster claim settlements!"
                                </div>
                            </div>
                            <div className="bg-gradient-to-br from-teal-50 to-teal-100 p-6 rounded-lg text-center hover:shadow-lg transition-shadow">
                                <div className="text-4xl mb-4">💳</div>
                                <h3 className="text-lg font-semibold mb-2 text-gray-800">
                                    Digital Wallets
                                </h3>
                                <p className="text-gray-600 text-sm mb-3">
                                    Verify linked bank accounts for wallet top-ups and money
                                    transfers.
                                </p>
                                <div className="text-xs text-teal-600 font-medium">
                                    "Secure wallet transactions!"
                                </div>
                            </div>
                        </div>
                    </div>
                </section>

                {/* Verification Types Section - Choose the Right Method */}
                <section className="bg-[#f7f1ef]








 py-16 px-4 md:px-8 lg:px-20">
                    <div className="w-full mx-auto">
                        <h2 className="text-3xl md:text-4xl font-bold text-gray-800 text-center mb-12">
                            Choose the Right{" "}
                            <span className="text-[#b7603d]">Verification Method</span>
                        </h2>
                        <div className="grid gap-6 grid-cols-1 md:grid-cols-2">
                            <div className="bg-white p-6 rounded-lg shadow-lg border-l-4 border-blue-500">
                                <div className="flex items-center mb-4">
                                    <div className="w-12 h-12 bg-[#f7f1ef]








 rounded-full flex items-center justify-center mr-4">
                                        <span className="text-[#b7603d]   font-bold">₹</span>
                                    </div>
                                    <div>
                                        <h3 className="text-xl font-semibold text-gray-800">
                                            Penny Drop Verification
                                        </h3>
                                        <span className="text-sm text-[#b7603d]   font-medium">
                                            Traditional Method
                                        </span>
                                    </div>
                                </div>
                                <p className="text-gray-600 mb-4">
                                    Sends ₹1 to the account and fetches the account holder name from
                                    bank statement.
                                </p>
                                <div className="space-y-2 text-sm">
                                    <div className="flex justify-between">
                                        <span className="text-gray-500">Response Time:</span>
                                        <span className="font-medium">2-5 seconds</span>
                                    </div>
                                    <div className="flex justify-between">
                                        <span className="text-gray-500">Cost:</span>
                                        <span className="font-medium">₹2-3 per verification</span>
                                    </div>
                                    <div className="flex justify-between">
                                        <span className="text-gray-500">Best For:</span>
                                        <span className="font-medium">High-value transactions</span>
                                    </div>
                                </div>
                            </div>

                            <div className="bg-white p-6 rounded-lg shadow-lg border-l-4 border-green-500">
                                <div className="flex items-center mb-4">
                                    <div className="w-12 h-12 bg-[#f7f1ef]








   rounded-full flex items-center justify-center mr-4">
                                        <span className="text-[#b7603d]   font-bold">⚡</span>
                                    </div>
                                    <div>
                                        <h3 className="text-xl font-semibold text-gray-800">
                                            Penny-Less Verification
                                        </h3>
                                        <span className="text-sm text-[#b7603d]   font-medium">
                                            NSDL / Yes Bank
                                        </span>
                                    </div>
                                </div>
                                <p className="text-gray-600 mb-4">
                                    Verifies account silently without any money transfer - faster
                                    and more cost-effective.
                                </p>
                                <div className="space-y-2 text-sm">
                                    <div className="flex justify-between">
                                        <span className="text-gray-500">Response Time:</span>
                                        <span className="font-medium">1-2 seconds</span>
                                    </div>
                                    <div className="flex justify-between">
                                        <span className="text-gray-500">Cost:</span>
                                        <span className="font-medium">₹0.50-1 per verification</span>
                                    </div>
                                    <div className="flex justify-between">
                                        <span className="text-gray-500">Best For:</span>
                                        <span className="font-medium">Bulk verifications</span>
                                    </div>
                                </div>
                            </div>

                            <div className="bg-white p-6 rounded-lg shadow-lg border-l-4 border-purple-500">
                                <div className="flex items-center mb-4">
                                    <div className="w-12 h-12 bg-[#f7f1ef]








  rounded-full flex items-center justify-center mr-4">
                                        <span className="text-[#b7603d] font-bold">UPI</span>
                                    </div>
                                    <div>
                                        <h3 className="text-xl font-semibold text-gray-800">
                                            UPI/VPA Verification
                                        </h3>
                                        <span className="text-sm text-[#b7603d] font-medium">
                                            Digital Payment
                                        </span>
                                    </div>
                                </div>
                                <p className="text-gray-600 mb-4">
                                    Checks UPI ID validity and fetches the associated account holder
                                    name.
                                </p>
                                <div className="space-y-2 text-sm">
                                    <div className="flex justify-between">
                                        <span className="text-gray-500">Response Time:</span>
                                        <span className="font-medium">1-3 seconds</span>
                                    </div>
                                    <div className="flex justify-between">
                                        <span className="text-gray-500">Cost:</span>
                                        <span className="font-medium">₹1-2 per verification</span>
                                    </div>
                                    <div className="flex justify-between">
                                        <span className="text-gray-500">Best For:</span>
                                        <span className="font-medium">UPI-based platforms</span>
                                    </div>
                                </div>
                            </div>

                            <div className="bg-white p-6 rounded-lg shadow-lg border-l-4 border-orange-500">
                                <div className="flex items-center mb-4">
                                    <div className="w-12 h-12 bg-orange-100 rounded-full flex items-center justify-center mr-4">
                                        <span className="text-orange-600 font-bold">📱</span>
                                    </div>
                                    <div>
                                        <h3 className="text-xl font-semibold text-gray-800">
                                            Mobile to UPI Fetch
                                        </h3>
                                        <span className="text-sm text-orange-600 font-medium">
                                            Discovery Service
                                        </span>
                                    </div>
                                </div>
                                <p className="text-gray-600 mb-4">
                                    Get all UPI IDs linked to a mobile number for comprehensive
                                    verification.
                                </p>
                                <div className="space-y-2 text-sm">
                                    <div className="flex justify-between">
                                        <span className="text-gray-500">Response Time:</span>
                                        <span className="font-medium">2-4 seconds</span>
                                    </div>
                                    <div className="flex justify-between">
                                        <span className="text-gray-500">Cost:</span>
                                        <span className="font-medium">₹1.50-2.50 per query</span>
                                    </div>
                                    <div className="flex justify-between">
                                        <span className="text-gray-500">Best For:</span>
                                        <span className="font-medium">User onboarding</span>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>

                {/* How It Works Section - Step-by-Step Flow */}
                <section className="bg-white py-16 px-4 md:px-8 lg:px-20">
                    <div className="w-full mx-auto">
                        <h2 className="text-3xl md:text-4xl font-bold text-gray-800 text-center mb-12">
                            How <span className="text-[#b7603d]">Bank Verification</span> Works
                        </h2>
                        <div className="relative">
                            {/* Timeline line */}
                            <div className="hidden md:block absolute top-8 left-0 w-full h-0.5 bg-gray-200"></div>
                            <div className="hidden md:block absolute top-8 left-0 w-full h-0.5 bg-gradient-to-r from-[#b7603d]
 to-transparent"></div>

                            <div className="grid gap-8 grid-cols-1 md:grid-cols-5">
                                <div className="text-center relative">
                                    <div className="w-16 h-16 bg-[#b7603d] rounded-full flex items-center justify-center text-white text-xl font-bold mx-auto mb-4 relative z-10">
                                        1
                                    </div>
                                    <h3 className="text-lg font-semibold mb-2">User Input</h3>
                                    <p className="text-gray-600 text-sm">
                                        User enters account info (A/C No + IFSC or UPI ID)
                                    </p>
                                </div>
                                <div className="text-center relative">
                                    <div className="w-16 h-16 bg-[#b7603d] rounded-full flex items-center justify-center text-white text-xl font-bold mx-auto mb-4 relative z-10">
                                        2
                                    </div>
                                    <h3 className="text-lg font-semibold mb-2">API Request</h3>
                                    <p className="text-gray-600 text-sm">
                                        API sends secure request to banking partner network
                                    </p>
                                </div>
                                <div className="text-center relative">
                                    <div className="w-16 h-16 bg-[#b7603d] rounded-full flex items-center justify-center text-white text-xl font-bold mx-auto mb-4 relative z-10">
                                        3
                                    </div>
                                    <h3 className="text-lg font-semibold mb-2">Bank Response</h3>
                                    <p className="text-gray-600 text-sm">
                                        Bank returns account holder name and status
                                    </p>
                                </div>
                                <div className="text-center relative">
                                    <div className="w-16 h-16 bg-[#b7603d] rounded-full flex items-center justify-center text-white text-xl font-bold mx-auto mb-4 relative z-10">
                                        4
                                    </div>
                                    <h3 className="text-lg font-semibold mb-2">Name Matching</h3>
                                    <p className="text-gray-600 text-sm">
                                        System checks for name match and validates data
                                    </p>
                                </div>
                                <div className="text-center relative">
                                    <div className="w-16 h-16 bg-[#b7603d] rounded-full flex items-center justify-center text-white text-xl font-bold mx-auto mb-4 relative z-10">
                                        5
                                    </div>
                                    <h3 className="text-lg font-semibold mb-2">Instant Results</h3>
                                    <p className="text-gray-600 text-sm">
                                        Response is delivered to user/client in real-time
                                    </p>
                                </div>
                            </div>
                        </div>

                        <div className="mt-12 bg-[#f7f1ef]








 p-6 rounded-lg">
                            <div className="flex flex-wrap justify-center gap-6 text-sm">
                                <div className="flex items-center space-x-2">
                                    <span className="w-3 h-3 bg-[#d38769] rounded-full"></span>
                                    <span>Supports Webhooks</span>
                                </div>
                                <div className="flex items-center space-x-2">
                                    <span className="w-3 h-3 bg-blue-500 rounded-full"></span>
                                    <span>RESTful API</span>
                                </div>
                                <div className="flex items-center space-x-2">
                                    <span className="w-3 h-3 bg-purple-500 rounded-full"></span>
                                    <span>JSON Response Format</span>
                                </div>
                                <div className="flex items-center space-x-2">
                                    <span className="w-3 h-3 bg-orange-500 rounded-full"></span>
                                    <span>PCI-DSS Compliant</span>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>

                {/* Benefits Section - Why Use Our API? */}
                <section className="bg-[#f7f1ef]








 py-16 px-4 md:px-8 lg:px-20">
                    <div className="w-full mx-auto">
                        <h2 className="text-3xl md:text-4xl font-bold text-gray-800 text-center mb-12">
                            Why Use Our{" "}
                            <span className="text-[#b7603d]">Bank Verification API</span>?
                        </h2>
                        <div className="grid gap-6 grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
                            <div className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow">
                                <div className="flex items-center mb-4">
                                    <div className="w-12 h-12 bg-[#f7f1ef]








   rounded-full flex items-center justify-center mr-4">
                                        <span className="text-[#b7603d]   text-xl">⚡</span>
                                    </div>
                                    <h3 className="text-lg font-semibold text-gray-800">
                                        Fast & Real-Time Results
                                    </h3>
                                </div>
                                <p className="text-gray-600 text-sm">
                                    Get verification results in 1-5 seconds with our optimized API
                                    infrastructure and direct bank connections.
                                </p>
                            </div>

                            <div className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow">
                                <div className="flex items-center mb-4">
                                    <div className="w-12 h-12 bg-[#f7f1ef]








 rounded-full flex items-center justify-center mr-4">
                                        <span className="text-[#b7603d]   text-xl">🔒</span>
                                    </div>
                                    <h3 className="text-lg font-semibold text-gray-800">
                                        PCI-DSS Compliant & Secure
                                    </h3>
                                </div>
                                <p className="text-gray-600 text-sm">
                                    Bank-grade security with end-to-end encryption, ensuring your
                                    data and transactions are always protected.
                                </p>
                            </div>

                            <div className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow">
                                <div className="flex items-center mb-4">
                                    <div className="w-12 h-12 bg-[#f7f1ef]








  rounded-full flex items-center justify-center mr-4">
                                        <span className="text-[#b7603d] text-xl">💰</span>
                                    </div>
                                    <h3 className="text-lg font-semibold text-gray-800">
                                        Cost-Effective Penny-less Option
                                    </h3>
                                </div>
                                <p className="text-gray-600 text-sm">
                                    Save up to 70% on verification costs with our penny-less
                                    verification method without compromising accuracy.
                                </p>
                            </div>

                            <div className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow">
                                <div className="flex items-center mb-4">
                                    <div className="w-12 h-12 bg-orange-100 rounded-full flex items-center justify-center mr-4">
                                        <span className="text-orange-600 text-xl">👨‍💻</span>
                                    </div>
                                    <h3 className="text-lg font-semibold text-gray-800">
                                        Developer Friendly API Docs
                                    </h3>
                                </div>
                                <p className="text-gray-600 text-sm">
                                    Comprehensive documentation, SDKs, and sandbox environment for
                                    quick and easy integration.
                                </p>
                            </div>

                            <div className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow">
                                <div className="flex items-center mb-4">
                                    <div className="w-12 h-12 bg-red-100 rounded-full flex items-center justify-center mr-4">
                                        <span className="text-red-600 text-xl">🚫</span>
                                    </div>
                                    <h3 className="text-lg font-semibold text-gray-800">
                                        Reduces Failed Payouts
                                    </h3>
                                </div>
                                <p className="text-gray-600 text-sm">
                                    Eliminate failed transactions and reduce operational costs by
                                    verifying accounts before processing payments.
                                </p>
                            </div>

                            <div className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow">
                                <div className="flex items-center mb-4">
                                    <div className="w-12 h-12 bg-teal-100 rounded-full flex items-center justify-center mr-4">
                                        <span className="text-teal-600 text-xl">✅</span>
                                    </div>
                                    <h3 className="text-lg font-semibold text-gray-800">
                                        Increases User Trust & KYC Accuracy
                                    </h3>
                                </div>
                                <p className="text-gray-600 text-sm">
                                    Build customer confidence and ensure regulatory compliance with
                                    accurate account verification.
                                </p>
                            </div>
                        </div>
                    </div>
                </section>

                {/* Integration Section - Developer Info */}
                <section className="bg-white py-16 px-4 md:px-8 lg:px-20">
                    <div className="w-full mx-auto">
                        <div className="flex flex-col lg:flex-row items-center gap-12">
                            <div className="w-full lg:w-1/2 space-y-6">
                                <h2 className="text-3xl md:text-4xl font-bold text-gray-800">
                                    Simple <span className="text-[#b7603d]">API Integration</span>
                                </h2>
                                <p className="text-gray-600">
                                    Get started with our Bank Account Verification API in minutes.
                                    Our comprehensive documentation and SDKs make integration
                                    seamless across all platforms.
                                </p>
                                <div className="space-y-3">
                                    <div className="flex items-center space-x-2">
                                        <span className="text-[#b7603d]">✓</span>
                                        <span>RESTful API with JSON responses</span>
                                    </div>
                                    <div className="flex items-center space-x-2">
                                        <span className="text-[#b7603d]">✓</span>
                                        <span>SDKs for Node.js, PHP, Python</span>
                                    </div>
                                    <div className="flex items-center space-x-2">
                                        <span className="text-[#b7603d]">✓</span>
                                        <span>Comprehensive documentation and examples</span>
                                    </div>
                                    <div className="flex items-center space-x-2">
                                        <span className="text-[#b7603d]">✓</span>
                                        <span>Sandbox environment for testing</span>
                                    </div>
                                    <div className="flex items-center space-x-2">
                                        <span className="text-[#b7603d]">✓</span>
                                        <span>Webhook support for async responses</span>
                                    </div>
                                    <div className="flex items-center space-x-2">
                                        <span className="text-[#b7603d]">✓</span>
                                        <span>API key authentication model</span>
                                    </div>
                                </div>
                                <a
                                    href="#"
                                    className="inline-block bg-[#b7603d] text-white font-semibold px-6 py-3 rounded shadow hover:bg-[#d19983] transition-colors"
                                >
                                    Read Full API Docs
                                </a>
                            </div>
                            <div className="w-full lg:w-1/2">
                                <div className="bg-gray-900 rounded-lg p-6 text-green-400 font-mono text-sm overflow-x-auto">
                                    <div className="mb-2 text-gray-400">// Sample API Request</div>
                                    <div className="text-blue-400">POST</div>{" "}
                                    <span className="text-white">/api/v1/bank-verification</span>
                                    <div className="text-gray-400 mt-2">Headers:</div>
                                    <div className="ml-2 text-yellow-400">
                                        Authorization: Bearer YOUR_API_KEY
                                    </div>
                                    <div className="ml-2 text-yellow-400">
                                        Content-Type: application/json
                                    </div>
                                    <div className="text-yellow-400 mt-3">{"{"}</div>
                                    <div className="ml-4 text-white">
                                        "account_number": "1234567890",
                                    </div>
                                    <div className="ml-4 text-white">
                                        "ifsc_code": "SBIN0001234",
                                    </div>
                                    <div className="ml-4 text-white">
                                        "account_holder_name": "John Doe",
                                    </div>
                                    <div className="ml-4 text-white">
                                        "verification_type": "penny_less"
                                    </div>
                                    <div className="text-yellow-400">{"}"}</div>
                                    <div className="mt-4 text-gray-400">// Sample Response</div>
                                    <div className="text-yellow-400">{"{"}</div>
                                    <div className="ml-4 text-white">"status": "success",</div>
                                    <div className="ml-4 text-white">"account_exists": true,</div>
                                    <div className="ml-4 text-white">
                                        "account_holder_name": "JOHN DOE",
                                    </div>
                                    <div className="ml-4 text-white">"name_match": "exact",</div>
                                    <div className="ml-4 text-white">
                                        "verification_id": "VER123456789",
                                    </div>
                                    <div className="ml-4 text-white">
                                        "timestamp": "2024-01-15T10:30:00Z"
                                    </div>
                                    <div className="text-yellow-400">{"}"}</div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
            </main>
        </>
    );
};

export default APICatalogPage;
