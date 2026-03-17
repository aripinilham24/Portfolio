const Loading = () => {
    return (
        <div className="fixed inset-0 flex items-center justify-center bg-gray-800 z-50">
            <div className="animate-spin rounded-full h-16 w-16 border-4 border-blue-300 border-t-transparent"></div>
        </div>
    );
};

export default Loading;
