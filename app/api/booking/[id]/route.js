import { NextResponse } from "next/server";
import { connectMongoDB } from "@/lib/mongodb";
import Booking from "@/models/booking";

export const PATCH = async (req, { params }) => {
    const { id } = params;
    const { status } = await req.json();

    try {
        await connectMongoDB();
        const updatedBooking = await Booking.findByIdAndUpdate(id, { status }, { new: true });

        if (!updatedBooking) {
            return NextResponse.json({ message: "Booking not found" }, { status: 404 });
        }

        return NextResponse.json(updatedBooking, { status: 200 });
    } catch (error) {
        return NextResponse.json({ message: "Error updating booking", error: error.message }, { status: 500 });
    }
};
