"use client";

import React, { useEffect, useState } from 'react';
import axiosClient from "@/lib/axiosClient"; // Assuming axiosClient is set up for API calls

const Marquee = () => {
    const [marqueeData, setMarqueeData] = useState<{ label: string }[]>([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const fetchMarqueeData = async () => {
            try {
                const response = await axiosClient.get("/marquee");
                setMarqueeData(response.data.marquee);
            } catch (error) {
                console.error("Error fetching marquee data:", error);
            } finally {
                setLoading(false);
            }
        };

        fetchMarqueeData();
    }, []);

    if (loading) return <div>Loading...</div>;
    if (!marqueeData.length) return <div>Error loading marquee data</div>;

    return (
        <section className='marquee-start bg-cream pt-30 min-1400:pt-50'>
            <div className="marquee">
                <div className="track">
                    <div className="content">
                        <ul className="gap-[20px] min-640:gap-[30px] min-990:gap-[50px] min-1400:gap-[100px]">
                            {marqueeData.map((item: { label: string }, index: number) => (
                                <li key={index}>
                                    <p className="font-[250] text-[40px] min-640:text-[50px] min-990:text-[80px] min-1400:text-[150px] min-1600:text-[200px] leading-150p text-primary-900 !font-[250]" style={{fontWeight: "250 !importance"}}>{item.label}</p>
                                </li>
                            ))}
                        </ul>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Marquee;
