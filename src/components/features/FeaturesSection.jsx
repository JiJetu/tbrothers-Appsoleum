import { FEATURES_DATA, getIconComponent } from "../../data/featuresData";

function FeaturesSection() {
  const { title, subtitle, description, features } = FEATURES_DATA;

  return (
    <section className="bg-white relative overflow-hidden" id="features">
      <div className="px-8 sm:px-12 xl:px-16 py-20 lg:py-24">
        {/* Features Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-6 w-full">
          {/* Section Header */}
          <div className="text-center lg:text-left mb-12 lg:mb-16">
            <h2 className="text-2xl lg:text-3xl xl:text-4xl font-bold leading-tight text-black mb-6">
              {title}
              <br />
              <span className="text-black font-bold">{subtitle}</span>
            </h2>
            <p className="text-base leading-relaxed text-gray-600 max-w-xl">
              {description}
            </p>
          </div>
          {features.map((feature) => {
            const IconComponent = getIconComponent(feature.icon);
            return (
              <div
                key={feature.id}
                className="bg-white border border-primary/15 rounded-3xl p-8 text-left transition-all duration-300 shadow-lg shadow-black/5 relative overflow-hidden group hover:-translate-y-2 hover:shadow-xl hover:shadow-black/10 hover:border-primary/30"
              >
                {/* Orange top border on hover */}
                <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-primary via-primary-light to-primary-lighter opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

                <div className="w-16 h-16 bg-gradient-to-br from-primary/10 to-primary-light/10 border-2 border-primary/30 rounded-2xl flex items-center justify-center mb-6 transition-all duration-300 group-hover:bg-gradient-to-br group-hover:from-primary/15 group-hover:to-primary-light/15 group-hover:border-primary/50 group-hover:scale-105">
                  <IconComponent className="text-3xl text-primary" />
                </div>

                <h3 className="font-poppins text-lg font-semibold text-hero-dark mb-3">
                  {feature.title}
                </h3>

                <p className="text-sm leading-relaxed text-gray-500">
                  {feature.description}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

export default FeaturesSection;
