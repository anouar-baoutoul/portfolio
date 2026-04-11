import { motion } from "framer-motion";

export default function AiDevOps() {
    return (
        <section id="ai-devops" className="py-24 bg-white dark:bg-gray-800">
            <div className="container mx-auto px-6 max-w-4xl">
                <motion.div
                    initial={{ opacity: 0, scale: 0.9 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5 }}
                    className="bg-linear-to-br from-blue-900 to-indigo-900 rounded-3xl p-10 md:p-16 text-white shadow-2xl relative overflow-hidden"
                >
                    {/* Decorative shapes */}
                    <div className="absolute top-0 right-0 w-64 h-64 bg-white opacity-5 rounded-full transform translate-x-1/2 -translate-y-1/2 blur-2xl"></div>
                    <div className="absolute bottom-0 left-0 w-64 h-64 bg-blue-400 opacity-10 rounded-full transform -translate-x-1/2 translate-y-1/2 blur-2xl"></div>

                    <div className="relative z-10">
                        <h2 className="text-3xl md:text-5xl font-bold mb-8 text-center bg-clip-text text-transparent bg-linear-to-r from-blue-200 to-purple-200">
                            AI & DevOps Specialist
                        </h2>

                        <p className="text-blue-100 text-center mb-10 max-w-2xl mx-auto text-lg leading-relaxed">
                            Bridging the gap between intelligent algorithms and solid infrastructure. Here is what I bring to the table:
                        </p>

                        <ul className="grid grid-cols-1 md:grid-cols-2 gap-4">
                            {[
                                { icon: "🧠", text: "ML/DL Models in PyTorch & TensorFlow" },
                                { icon: "🚀", text: "Infrastructure as Code (Terraform, AWS CDK)" },
                                { icon: "📦", text: "Containerization (Docker, Kubernetes)" },
                                { icon: "🔐", text: "CI/CD Pipelines (GitHub Actions, AWS)" },
                                { icon: "🛠️", text: "Serverless Deployment (Lambda, API Gateway)" },
                                { icon: "📊", text: "Data Pipeline Engineering" }
                            ].map((item, i) => (
                                <motion.li
                                    key={i}
                                    initial={{ opacity: 0, x: -20 }}
                                    whileInView={{ opacity: 1, x: 0 }}
                                    viewport={{ once: true }}
                                    transition={{ delay: i * 0.1 }}
                                    className="flex items-start bg-white/10 backdrop-blur-md rounded-xl p-4 border border-white/10 hover:bg-white/20 transition-colors"
                                >
                                    <span className="text-2xl mr-4">{item.icon}</span>
                                    <span className="font-medium text-blue-50 pt-1">{item.text}</span>
                                </motion.li>
                            ))}
                        </ul>
                    </div>
                </motion.div>
            </div>
        </section>
    );
}
