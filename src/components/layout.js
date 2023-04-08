export const PageLayout = ({ children }) => {
    return (
        <main className="flex h-screen justify-center">
            <div className="h-full w-full overflow-y-scroll border-x border-slate-400 md:max-w-2xl">
                {children}
            </div>
        </main>
    )
}